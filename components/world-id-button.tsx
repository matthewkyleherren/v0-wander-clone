"use client"

import { useEffect, useState } from "react"
import { useSession, type ISuccessResult } from "@worldcoin/idkit"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function WorldIdButton() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [started, setStarted] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [verifyError, setVerifyError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // If env vars are missing, render a disabled button instead of crashing.
  const appId = process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID
  const actionId = process.env.NEXT_PUBLIC_WORLDCOIN_ACTION_ID

  // We assume appId/actionId are set if button is shown; otherwise keep disabled.
  const { status, sessionURI, result, errorCode } = useSession(
    appId && actionId
      ? {
          app_id: appId,
          action: actionId,
        }
      : {
          app_id: "",
          action: "",
        },
  )

  useEffect(() => {
    if (!started) return
    if (status !== "Confirmed") return
    if (!result) return
    if (verifying) return

    const run = async () => {
      try {
        setVerifying(true)
        setVerifyError(null)

        const proof = result as ISuccessResult
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

        router.push("/")
        router.refresh()
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Verification failed"
        setVerifyError(msg)
      } finally {
        setVerifying(false)
      }
    }

    void run()
  }, [started, status, result, verifying, router])

  if (!appId || !actionId || !mounted) {
    return (
      <Button variant="outline" className="w-full" type="button" disabled>
        Continue with World ID
      </Button>
    )
  }

  if (!started) {
    return (
      <Button
        variant="outline"
        className="w-full"
        type="button"
        onClick={() => setStarted(true)}
      >
        Continue with World ID
      </Button>
    )
  }

  // Started: show session status
  if (status === "WaitingForConnection") {
    return (
      <div className="w-full space-y-2 text-center">
        <p className="text-sm text-muted-foreground">
          Open this link in World App to verify:
        </p>
        {sessionURI && (
          <a
            href={sessionURI}
            target="_blank"
            rel="noreferrer"
            className="break-all text-xs text-primary underline"
          >
            {sessionURI}
          </a>
        )}
        <p className="text-xs text-muted-foreground">
          After completing verification in the app, this page will continue.
        </p>
      </div>
    )
  }

  if (status === "Failed") {
    return (
      <div className="w-full space-y-2 text-center">
        <p className="text-sm text-destructive">
          World ID session failed {errorCode ? `(${errorCode})` : ""}
        </p>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => {
            setStarted(false)
            setVerifyError(null)
          }}
        >
          Try again
        </Button>
      </div>
    )
  }

  if (verifying) {
    return (
      <Button
        variant="outline"
        className="w-full"
        type="button"
        disabled
      >
        Completing World ID verification...
      </Button>
    )
  }

  if (verifyError) {
    return (
      <div className="w-full space-y-2 text-center">
        <p className="text-sm text-destructive">{verifyError}</p>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => {
            setStarted(false)
            setVerifyError(null)
          }}
        >
          Try again
        </Button>
      </div>
    )
  }

  // Fallback: show a neutral state while waiting for status transitions.
  return (
    <Button
      variant="outline"
      className="w-full"
      type="button"
      disabled
    >
      Waiting for World ID session...
    </Button>
  )
}