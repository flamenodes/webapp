import CardSwap, { Card } from './CardSwap'
import { Gamepad2, Shield, Zap } from 'lucide-react'

export function GamePanelCardSwap() {
  return (
    <div style={{ height: '700px', position: 'relative' }}>
      <CardSwap
        width={600}
        height={500}
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
      >
        <Card className="bg-background border-primary/50 p-8 flex flex-col justify-center items-center">
          <Gamepad2 className="w-16 h-16 mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Full Panel Access</h3>
          <p className="text-center text-muted-foreground">Complete control over your game server with an intuitive management interface</p>
        </Card>

        <Card className="bg-accent/50 border-primary/50 p-8 flex flex-col justify-center items-center">
          <Shield className="w-16 h-16 mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Secure Authentication</h3>
          <p className="text-center text-muted-foreground">Generate and manage passwords securely with one-click access</p>
        </Card>

        <Card className="bg-background border-primary/50 p-8 flex flex-col justify-center items-center">
          <Zap className="w-16 h-16 mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Instant Setup</h3>
          <p className="text-center text-muted-foreground">Start managing your servers immediately with zero configuration required</p>
        </Card>
      </CardSwap>
    </div>
  )
}
