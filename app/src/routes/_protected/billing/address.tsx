import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { ArrowRight, ArrowLeft, MapPin, User, Phone, Mail, Plus } from 'lucide-react'
import { toast } from 'sonner'
import { ThemeSwitch } from '#/components/theme/ThemeSwitch'

export const Route = createFileRoute('/_protected/billing/address')({
  component: BillingAddressPage,
  head: () => ({ meta: [{ title: 'Billing Address | Flame Nodes' }] }),
})

interface BillingAddress {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

function BillingAddressPage() {
  const navigate = useNavigate()
  const [savedAddresses, setSavedAddresses] = useState<BillingAddress[]>([])
  const [selectedAddressId, setSelectedAddressId] = useState<string>('new')
  const [billingConfig, setBillingConfig] = useState<any>(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  })

  useEffect(() => {
    const config = sessionStorage.getItem('billingConfig')
    if (!config) {
      toast.error('No billing configuration found')
      navigate({ to: '/billing/cart' })
      return
    }
    setBillingConfig(JSON.parse(config))

    const saved = localStorage.getItem('billingAddresses')
    if (saved) {
      const addresses = JSON.parse(saved)
      setSavedAddresses(addresses)
      
      // Check if there's an existing billing address in session
      const existingAddress = sessionStorage.getItem('billingAddress')
      if (existingAddress) {
        const addressData = JSON.parse(existingAddress)
        setFormData(addressData)
        
        // Find if this address matches a saved one
        const matchingSaved = addresses.find((a: BillingAddress) => 
          a.email === addressData.email && a.phone === addressData.phone
        )
        if (matchingSaved) {
          setSelectedAddressId(matchingSaved.id)
        }
      }
    }
  }, [])

  const handleAddressSelect = (addressId: string) => {
    setSelectedAddressId(addressId)
    if (addressId === 'new') {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India',
      })
    } else {
      const address = savedAddresses.find(a => a.id === addressId)
      if (address) {
        setFormData({
          firstName: address.firstName,
          lastName: address.lastName,
          email: address.email,
          phone: address.phone,
          address: address.address,
          city: address.city,
          state: address.state,
          zipCode: address.zipCode,
          country: address.country,
        })
      }
    }
  }

  const handleContinue = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.address || !formData.city || !formData.state || !formData.zipCode) {
      toast.error('Please fill in all required fields')
      return
    }

    if (selectedAddressId === 'new') {
      const newAddress: BillingAddress = {
        id: Date.now().toString(),
        ...formData,
      }
      const updated = [...savedAddresses, newAddress]
      setSavedAddresses(updated)
      localStorage.setItem('billingAddresses', JSON.stringify(updated))
    }

    sessionStorage.setItem('billingAddress', JSON.stringify(formData))
    navigate({ to: '/billing/payment' })
  }

  if (!billingConfig) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/flamenodes.png" alt="Flame Nodes" className="h-8 w-8" />
            <span className="text-xl font-bold">Flame Nodes</span>
          </Link>
          <ThemeSwitch />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">
              Billing Information
            </h1>
            <p className="text-muted-foreground">
              Step 2 of 3: Enter your billing details
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Configuration</span>
              <span className="text-sm font-medium text-primary">Billing Details</span>
              <span className="text-sm text-muted-foreground">Payment</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {savedAddresses.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Select Billing Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={selectedAddressId} onValueChange={handleAddressSelect}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">
                          <div className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Create New Billing Address
                          </div>
                        </SelectItem>
                        {savedAddresses.map((address) => (
                          <SelectItem key={address.id} value={address.id}>
                            {address.firstName} {address.lastName} - {address.city}, {address.state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>First Name *</Label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label>Last Name *</Label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="h-12 mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone *
                      </Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                        className="h-12 mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Address Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Street Address *</Label>
                    <Input
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main Street, Apt 4B"
                      className="h-12 mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>City *</Label>
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Mumbai"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label>State *</Label>
                      <Input
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="Maharashtra"
                        className="h-12 mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>ZIP Code *</Label>
                      <Input
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        placeholder="400001"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label>Country *</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                        <SelectTrigger className="h-12 mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="flex-1 h-12"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleContinue}
                className="flex-1 h-12"
              >
                Continue to Payment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product</span>
                      <span className="font-medium">{billingConfig.productName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Billing Period</span>
                      <span className="font-medium">{billingConfig.billingPeriod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-medium">×{billingConfig.quantity}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-3xl font-bold text-primary">₹{billingConfig.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t bg-card py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Flame Nodes. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
