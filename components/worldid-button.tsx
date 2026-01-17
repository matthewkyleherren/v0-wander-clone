"use client"

import { IDKitWidget, VerificationLevel, ISuccessResult } from "@worldcoin/idkit"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface WorldIDButtonProps {
  onError?: (error: string) => void
}

export function WorldIDButton({ onError }: WorldIDButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleVerify = async (result: ISuccessResult) => {
    setLoading(true)
    try {
      const response = await fetch("/api/auth/worldid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proof: result.proof,
          merkle_root: result.merkle_root,
          nullifier_hash: result.nullifier_hash,
          verification_level: result.verification_level,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        onError?.(data.error || "Verification failed")
        return
      }

      router.push("/")
      router.refresh()
    } catch {
      onError?.("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const appId = process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID
  const actionId = process.env.NEXT_PUBLIC_WORLDCOIN_ACTION_ID

  if (!appId || !actionId) {
    return (
      <Button variant="outline" className="w-full" disabled>
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
        World ID (Not Configured)
      </Button>
    )
  }

  return (
    <IDKitWidget
      app_id={appId as `app_${string}`}
      action={actionId}
      verification_level={VerificationLevel.Orb}
      onSuccess={handleVerify}
      onError={(error) => onError?.(error.message)}
    >
      {({ open }) => (
        <Button
          variant="outline"
          className="w-full"
          onClick={open}
          disabled={loading}
          type="button"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          {loading ? "Verifying..." : "Continue with World ID"}
        </Button>
      )}
    </IDKitWidget>
  )
}
