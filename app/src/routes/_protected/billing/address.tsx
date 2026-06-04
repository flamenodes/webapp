import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Textarea } from '#/components/ui/textarea'
import { Spotlight } from '#/components/ui/spotlight-new'
import { ArrowLeft, ArrowRight, MapPin, Plus, User } from 'lucide-react'

export const Route = createFileRoute('/_protected/billing/address')({
  component: BillingAddressPage,
})

type SavedAddress = {
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
  const [selectedAddress, setSelectedAddress] = useState<string>('new')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('IN')

  // Mock saved addresses - replace with actual API call
  const savedAddresses: SavedAddress[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      address: '123 Tech Street, Building A',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'IN',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '+91 98765 43211',
      address: '456 Cloud Avenue, Floor 5',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001',
      country: 'IN',
    },
  ]

  useEffect(() => {
    if (selectedAddress !== 'new') {
      const addr = savedAddresses.find(a => a.id === selectedAddress)
      if (addr) {
        setFirstName(addr.firstName)
        setLastName(addr.lastName)
        setEmail(addr.email)
        setPhone(addr.phone)
        setAddress(addr.address)
        setCity(addr.city)
        setState(addr.state)
        setZipCode(addr.zipCode)
        setCountry(addr.country)
      }
    } else {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setAddress('')
      setCity('')
      setState('')
      setZipCode('')
      setCountry('IN')
    }
  }, [selectedAddress])

  const isValid = firstName && lastName && email && phone && address && city && state && zipCode && country

  const handleContinue = () => {
    sessionStorage.setItem('billingAddress', JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      country,
    }))
    navigate({ to: '/billing/payment' })
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 70%, .16) 0, hsla(0, 100%, 50%, .06) 50%, hsla(0, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(350, 100%, 75%, .12) 0, hsla(0, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(340, 100%, 65%, .08) 0, hsla(350, 100%, 50%, .03) 80%, transparent 100%)"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
            Billing Details
          </h1>
          <p className="text-lg text-muted-foreground">
            Step 2 of 3: Enter your billing information
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Configuration</span>
            <span className="text-sm font-medium text-primary">Billing Details</span>
            <span className="text-sm text-muted-foreground">Payment</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-primary to-primary/80 rounded-full" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Billing Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Saved Addresses Dropdown */}
              <div>
                <Label className="mb-3 block">Select Saved Address</Label>
                <Select value={selectedAddress} onValueChange={setSelectedAddress}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">
                      <div className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        <span>Create New Address</span>
                      </div>
                    </SelectItem>
                    {savedAddresses.map((addr) => (
                      <SelectItem key={addr.id} value={addr.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{addr.firstName} {addr.lastName}</span>
                          <span className="text-xs text-muted-foreground">{addr.address}, {addr.city}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name *</Label>
                  <Input
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label>Last Name *</Label>
                  <Input
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label>Phone Number *</Label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              {/* Address Information */}
              <div>
                <Label>Street Address *</Label>
                <Textarea
                  placeholder="123 Tech Street, Building A, Floor 5"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>City *</Label>
                  <Input
                    placeholder="Mumbai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label>State / Province *</Label>
                  <Input
                    placeholder="Maharashtra"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>ZIP / Postal Code *</Label>
                  <Input
                    placeholder="400001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label>Country *</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="h-12 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IN">India</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => navigate({ to: '/billing/info' })}
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!isValid}
                  className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
