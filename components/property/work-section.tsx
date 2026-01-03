import { Wifi, Monitor, Camera, Keyboard, Cable, Mouse, Mic } from "lucide-react"

const workSetupItems = [
  { name: "Uplift Standing Desk", icon: "desk" },
  { name: "LG Ultrawide Monitor", icon: "monitor" },
  { name: "Logitech Webcam", icon: "camera" },
  { name: "Magic Keyboard", icon: "keyboard" },
  { name: "Caldigit Dock", icon: "dock" },
  { name: "Razer Mouse", icon: "mouse" },
  { name: "Blue Yeti Microphone", icon: "mic" },
]

export function WorkSection() {
  return (
    <section id="work" className="py-8 border-b border-border">
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase mb-1">WORK SETUPS</p>
      <h2 className="text-base font-medium text-foreground mb-1.5">Work like an absolute pro</h2>
      <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
        We had enough of coffee tables, uncomfortable chairs and slow WiFi, so we made work travel way better.
      </p>

      {/* WiFi Speed Card - v0 style */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-background rounded-md flex items-center justify-center flex-shrink-0">
            <Wifi className="h-4 w-4 text-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-0.5">Super-fast WiFi</h3>
            <p className="text-xs text-muted-foreground">Stay connected while disconnecting</p>
          </div>
        </div>

        {/* Speed Comparison */}
        <div className="mt-4 space-y-2">
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-foreground font-medium">100+ Mbps</span>
              <span className="text-muted-foreground">Wander's WiFi</span>
            </div>
            <div className="h-1.5 bg-foreground rounded-full" style={{ width: "100%" }} />
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-foreground font-medium">20 Mbps</span>
              <span className="text-muted-foreground">Average rental WiFi</span>
            </div>
            <div className="h-1.5 bg-muted-foreground/30 rounded-full" style={{ width: "20%" }} />
          </div>
        </div>
      </div>

      {/* Work Setup Items - v0 style */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {workSetupItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-28 bg-muted rounded-md p-3 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-background rounded-md flex items-center justify-center">
              {item.icon === "monitor" && <Monitor className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "camera" && <Camera className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "keyboard" && <Keyboard className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "dock" && <Cable className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "mouse" && <Mouse className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "mic" && <Mic className="h-5 w-5 text-muted-foreground" />}
              {item.icon === "desk" && <div className="w-5 h-5 border-2 border-muted-foreground rounded" />}
            </div>
            <p className="text-[11px] text-foreground leading-tight">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
