"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function PaymentForm() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Payment</CardTitle>
        <CardDescription>Pay your hostel fees securely online</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Payment Amount</Label>
              <RadioGroup defaultValue="full" className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="full" id="full" />
                  <Label htmlFor="full" className="flex flex-col">
                    <span>Full Payment</span>
                    <span className="text-sm font-normal text-muted-foreground">$500.00</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="partial" id="partial" />
                  <Label htmlFor="partial" className="flex flex-col">
                    <span>Partial Payment</span>
                    <span className="text-sm font-normal text-muted-foreground">$250.00</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile">Mobile Money</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="MM/YY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01/24">01/24</SelectItem>
                    <SelectItem value="02/24">02/24</SelectItem>
                    <SelectItem value="03/24">03/24</SelectItem>
                    <SelectItem value="04/24">04/24</SelectItem>
                    <SelectItem value="05/24">05/24</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input id="cardholderName" placeholder="John Doe" />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isProcessing}>
            {isProcessing ? "Processing Payment..." : "Pay Now"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-6">
        <p className="text-xs text-muted-foreground">
          Your payment information is encrypted and secure. We do not store your card details.
        </p>
      </CardFooter>
    </Card>
  )
}

