"use client"

import { IDKitWidget, ISuccessResult, VerificationLevel } from "@worldcoin/idkit"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function WorldIdButton() {
  const router = useRouter()

  const handleWorldIdVerify = async (proof: ISuccessResult) => {
    const res = await fetch("/api/auth/world-id/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      throw new Error(data?.error || "Verification failed")
    }
  }

  const handleWorldIdSuccess = () => {
    router.push("/")
    router.refresh()
  }

  // If env vars are missing, render a disabled button instead of crashing.
  const appId = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID
  const actionId = process.env.NEXT_PUBLIC_WORLD_ID_ACTION_ID

  if (!appId || !actionId) {
    return (
      <Button variant="outline" className="w-full" type="button" disabled>
        Continue with World ID
      </Button>
    )
  }

  return (
    <IDKitWidget
      app_id={appId}
      action={actionId}
      onSuccess={handleWorldIdSuccess}
      handleVerify={handleWorldIdVerify}
      verification_level={VerificationLevel.Orb}
    >
      {({ open }) => (
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={open}
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          Continue with World ID
        </Button>
      )}
    </IDKitWidget>
  )
}