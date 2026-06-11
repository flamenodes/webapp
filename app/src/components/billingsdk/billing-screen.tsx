"use client";

import type React from "react";
import { Button } from "#/components/ui/button.tsx";
import { InfoIcon } from "lucide-react";
import { cn } from "#/lib/utils.ts";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { getOrders } from "#/serverActions/billing/order.api";
import { toast } from "sonner";

// Internal CreditCard component (not exported)
function CreditCard({
  balance,
  username,
  className,
}: {
  balance: string;
  username: string;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={cn("relative mx-auto w-full max-w-md font-sans", className)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full overflow-hidden bg-zinc-950 p-6 shadow-xl ring ring-black/10 dark:bg-zinc-900"
        style={{
          aspectRatio: "190/123",
          alignSelf: "stretch",
          borderRadius: "12px",
          rotateX,
          rotateY,
          transformPerspective: 1000,
          scale: 1,
          transition: "box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.2)",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={{
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent 0%, transparent 20%, rgba(128,128,128,0.1) 30%, rgba(128,128,128,0.2) 50%, rgba(128,128,128,0.1) 70%, transparent 80%, transparent 100%)",
            filter: "blur(2px)",
            mixBlendMode: "normal",
            opacity: 0.7,
            x: shineX,
            skewX: -15,
          }}
        />

        {/* Top edge highlight */}
        <motion.div
          className="pointer-events-none absolute top-0 right-0 left-0 h-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            borderRadius: "12px 12px 0 0",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Left edge highlight */}
        <motion.div
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
            borderRadius: "12px 0 0 12px",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom edge highlight */}
        <motion.div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-1"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
            borderRadius: "0 0 12px 12px",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Right edge highlight */}
        <motion.div
          className="pointer-events-none absolute top-0 right-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
            borderRadius: "0 12px 12px 0",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <div className="relative z-10 h-full">
          {/* Centered amount and username */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-bold tracking-tight text-zinc-200">
              {balance}
            </div>
            <div className="mt-1 text-base font-medium text-zinc-400">
              {username}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export interface BillingScreenProps {
  className?: string;
  onViewPlans?: () => void;
  onBuyCredits?: () => void;
}

export function BillingScreen({
  className,
  onViewPlans,
  onBuyCredits,
}: BillingScreenProps) {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalSpent, setTotalSpent] = useState(0)
  const [activeServices, setActiveServices] = useState(0)

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getOrders()
        setOrders(data)
        
        const spent = data
          .filter((o: any) => o.status === 'PAID' || o.status === 'DELIVERED')
          .reduce((sum: number, o: any) => sum + o.totalAmount, 0)
        setTotalSpent(spent)
        
        const active = data.filter(
          (o: any) => o.status === 'DELIVERED' || o.status === 'PROCESSING'
        ).length
        setActiveServices(active)
      } catch (error: any) {
        toast.error(error.message || 'Failed to load billing data')
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  if (loading) {
    return (
      <div className={cn("bg-background text-foreground min-h-screen p-6 md:p-12 flex items-center justify-center", className)}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading billing information...</p>
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn(
        "bg-background text-foreground min-h-screen p-6 md:p-12",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Page Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Billing</h1>
        </div>

        {/* Current Plan Section */}
        <section className="space-y-4">
          <h2 className="text-muted-foreground text-lg">Billing Overview</h2>
          <div className="border-border grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-border rounded-xl border p-6">
              <div className="text-muted-foreground text-sm mb-2">Total Spent</div>
              <div className="text-3xl font-bold text-primary">₹{(totalSpent / 100).toFixed(2)}</div>
            </div>
            <div className="border-border rounded-xl border p-6">
              <div className="text-muted-foreground text-sm mb-2">Active Services</div>
              <div className="text-3xl font-bold text-primary">{activeServices}</div>
            </div>
            <div className="border-border rounded-xl border p-6">
              <div className="text-muted-foreground text-sm mb-2">Total Orders</div>
              <div className="text-3xl font-bold text-primary">{orders.length}</div>
            </div>
          </div>
        </section>

        {/* Recent Orders Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-lg">Recent Orders</h2>
            <Button onClick={onViewPlans}>Browse Plans</Button>
          </div>

          <div className="border-border overflow-hidden rounded-xl border">
            {orders.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Button onClick={onViewPlans}>Get Started</Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-border border-b bg-muted/30">
                    <tr>
                      <th className="text-left p-4 font-medium">Order ID</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-right p-4 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 10).map((order) => (
                      <tr key={order.id} className="border-border border-b last:border-0 hover:bg-muted/20">
                        <td className="p-4 font-mono text-sm">{order.id.slice(0, 8)}</td>
                        <td className="p-4 text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <span className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            order.status === 'PAID' && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                            order.status === 'DELIVERED' && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                            order.status === 'PENDING' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                            order.status === 'CANCELLED' && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                          )}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-right font-medium">₹{(order.totalAmount / 100).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
