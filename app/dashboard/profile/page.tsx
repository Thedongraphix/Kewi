"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser, useClerk } from "@clerk/nextjs"
import { useToast } from "@/components/ui/use-toast"

export default function ProfilePage() {
  const { user, isLoaded } = useUser()
  const { openUserProfile } = useClerk()
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    phone: "",
    department: "",
    year: "",
  })
  
  const { toast } = useToast()
  
  if (!isLoaded) {
    return <div className="flex justify-center items-center h-full">Loading profile...</div>
  }

  const firstName = user?.firstName || ''
  const lastName = user?.lastName || ''
  const email = user?.emailAddresses?.[0]?.emailAddress || ''
  const imageUrl = user?.imageUrl

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Here you would typically save the additional profile data to your database
      // Since we're using Clerk, you can use their metadata API or your own database
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      })
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was a problem updating your profile.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleManageAccount = () => {
    openUserProfile()
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your account information and settings
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={imageUrl} alt={`${firstName} ${lastName}`} />
              <AvatarFallback className="text-lg">
                {firstName.charAt(0)}{lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-bold">{firstName} {lastName}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <Button variant="outline" className="w-full" onClick={handleManageAccount}>
              Manage Account
            </Button>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={firstName} 
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={lastName} 
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          disabled 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          value={profileData.phone} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input 
                          id="department" 
                          value={profileData.department} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study</Label>
                        <Input 
                          id="year" 
                          value={profileData.year} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your password and security options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" onClick={handleManageAccount}>
                    Change Password
                  </Button>
                  <Button variant="outline" onClick={handleManageAccount}>
                    Manage Two-Factor Authentication
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Manage your notification and account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Preferences settings coming soon.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

