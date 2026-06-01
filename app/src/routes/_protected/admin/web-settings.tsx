import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getWebSettingByKey, updateWebSetting } from '../../../serverActions/web-settings.api'
import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/web-settings')({
  component: WebSettingsPage,
  loader: async () => {
    const [footer, header] = await Promise.all([
      getWebSettingByKey({ data: 'footer' }),
      getWebSettingByKey({ data: 'header' })
    ])
    return { footer, header }
  }
})

type FooterLink = {
  id: string
  label: string
  url: string
}

type FooterCategory = {
  id: string
  title: string
  links: FooterLink[]
}

type SocialLink = {
  id: string
  platform: string
  url: string
  icon: string
}

type FooterSettings = {
  categories: FooterCategory[]
  socialLinks: SocialLink[]
  copyrightText: string
}

type CompanyLink = {
  id: string
  label: string
  url: string
  description?: string
}

type HeaderSettings = {
  companyDropdown: CompanyLink[]
}

function WebSettingsPage() {
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()

  const { data: footerData } = useSuspenseQuery({
    queryKey: ['webSettings', 'footer'],
    queryFn: () => getWebSettingByKey({ data: 'footer' }),
    initialData: loaderData.footer
  })

  const { data: headerData } = useSuspenseQuery({
    queryKey: ['webSettings', 'header'],
    queryFn: () => getWebSettingByKey({ data: 'header' }),
    initialData: loaderData.header
  })

  const [footer, setFooter] = useState<FooterSettings>(
    footerData?.value || {
      categories: [],
      socialLinks: [],
      copyrightText: '© 2024 Flame Nodes. All rights reserved.'
    }
  )

  const [header, setHeader] = useState<HeaderSettings>(
    headerData?.value || {
      companyDropdown: []
    }
  )

  const updateMutation = useMutation({
    mutationFn: (data: { key: string; value: any }) => updateWebSetting({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webSettings'] })
      toast.success('Settings saved successfully')
    },
    onError: () => {
      toast.error('Failed to save settings')
    }
  })

  const handleSaveAll = () => {
    Promise.all([
      updateMutation.mutateAsync({ key: 'footer', value: footer }),
      updateMutation.mutateAsync({ key: 'header', value: header })
    ])
  }

  const addCategory = () => {
    setFooter({
      ...footer,
      categories: [...footer.categories, { id: crypto.randomUUID(), title: '', links: [] }]
    })
  }

  const removeCategory = (id: string) => {
    setFooter({
      ...footer,
      categories: footer.categories.filter(c => c.id !== id)
    })
  }

  const updateCategory = (id: string, title: string) => {
    setFooter({
      ...footer,
      categories: footer.categories.map(c => c.id === id ? { ...c, title } : c)
    })
  }

  const addLink = (categoryId: string) => {
    setFooter({
      ...footer,
      categories: footer.categories.map(c =>
        c.id === categoryId
          ? { ...c, links: [...c.links, { id: crypto.randomUUID(), label: '', url: '' }] }
          : c
      )
    })
  }

  const removeLink = (categoryId: string, linkId: string) => {
    setFooter({
      ...footer,
      categories: footer.categories.map(c =>
        c.id === categoryId
          ? { ...c, links: c.links.filter(l => l.id !== linkId) }
          : c
      )
    })
  }

  const updateLink = (categoryId: string, linkId: string, field: 'label' | 'url', value: string) => {
    setFooter({
      ...footer,
      categories: footer.categories.map(c =>
        c.id === categoryId
          ? {
              ...c,
              links: c.links.map(l => l.id === linkId ? { ...l, [field]: value } : l)
            }
          : c
      )
    })
  }

  const addSocialLink = () => {
    setFooter({
      ...footer,
      socialLinks: [...footer.socialLinks, { id: crypto.randomUUID(), platform: '', url: '', icon: '' }]
    })
  }

  const removeSocialLink = (id: string) => {
    setFooter({
      ...footer,
      socialLinks: footer.socialLinks.filter(s => s.id !== id)
    })
  }

  const updateSocialLink = (id: string, field: keyof SocialLink, value: string) => {
    setFooter({
      ...footer,
      socialLinks: footer.socialLinks.map(s => s.id === id ? { ...s, [field]: value } : s)
    })
  }

  const addCompanyLink = () => {
    setHeader({
      ...header,
      companyDropdown: [...header.companyDropdown, { id: crypto.randomUUID(), label: '', url: '', description: '' }]
    })
  }

  const removeCompanyLink = (id: string) => {
    setHeader({
      ...header,
      companyDropdown: header.companyDropdown.filter(l => l.id !== id)
    })
  }

  const updateCompanyLink = (id: string, field: 'label' | 'url' | 'description', value: string) => {
    setHeader({
      ...header,
      companyDropdown: header.companyDropdown.map(l => l.id === id ? { ...l, [field]: value } : l)
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Web Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your website configuration</p>
        </div>
        <Button onClick={handleSaveAll} disabled={updateMutation.isPending} size="sm">
          <FaSave className="mr-2 h-3.5 w-3.5" />
          Save All
        </Button>
      </div>

      <Tabs defaultValue="header" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>

        <TabsContent value="header" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Company Dropdown</CardTitle>
              <CardDescription className="text-xs">Manage links in the Company dropdown menu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {header.companyDropdown.map((link) => (
                <div key={link.id} className="grid grid-cols-12 gap-2 p-2 border rounded-md bg-muted/30">
                  <Input
                    value={link.label}
                    onChange={(e) => updateCompanyLink(link.id, 'label', e.target.value)}
                    placeholder="Label"
                    className="col-span-3 h-8 text-sm"
                  />
                  <Input
                    value={link.url}
                    onChange={(e) => updateCompanyLink(link.id, 'url', e.target.value)}
                    placeholder="/url"
                    className="col-span-3 h-8 text-sm"
                  />
                  <Input
                    value={link.description || ''}
                    onChange={(e) => updateCompanyLink(link.id, 'description', e.target.value)}
                    placeholder="Description"
                    className="col-span-5 h-8 text-sm"
                  />
                  <Button variant="ghost" size="icon" className="col-span-1 h-8 w-8" onClick={() => removeCompanyLink(link.id)}>
                    <FaTrash className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <Button onClick={addCompanyLink} variant="outline" size="sm" className="w-fit h-8">
                <FaPlus className="mr-1.5 h-3 w-3" /> Add Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Footer Categories</CardTitle>
              <CardDescription className="text-xs">Manage footer navigation categories and links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {footer.categories.map((category) => (
                <div key={category.id} className="border rounded-md p-3 space-y-2 bg-muted/20">
                  <div className="flex gap-2">
                    <Input
                      value={category.title}
                      onChange={(e) => updateCategory(category.id, e.target.value)}
                      placeholder="Category Title"
                      className="flex-1 h-8 text-sm font-medium"
                    />
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeCategory(category.id)}>
                      <FaTrash className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="space-y-1.5 pl-3">
                    {category.links.map((link) => (
                      <div key={link.id} className="flex gap-2">
                        <Input
                          value={link.label}
                          onChange={(e) => updateLink(category.id, link.id, 'label', e.target.value)}
                          placeholder="Label"
                          className="flex-1 h-8 text-sm"
                        />
                        <Input
                          value={link.url}
                          onChange={(e) => updateLink(category.id, link.id, 'url', e.target.value)}
                          placeholder="/url"
                          className="flex-1 h-8 text-sm"
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeLink(category.id, link.id)}>
                          <FaTrash className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-fit h-7 text-xs" onClick={() => addLink(category.id)}>
                      <FaPlus className="mr-1 h-2.5 w-2.5" /> Add Link
                    </Button>
                  </div>
                </div>
              ))}
              <Button onClick={addCategory} variant="outline" size="sm" className="w-fit h-8">
                <FaPlus className="mr-1.5 h-3 w-3" /> Add Category
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Social Media Links</CardTitle>
              <CardDescription className="text-xs">Configure social media links for the footer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {footer.socialLinks.map((social) => (
                <div key={social.id} className="grid grid-cols-12 gap-2 p-2 border rounded-md bg-muted/30">
                  <Input
                    value={social.platform}
                    onChange={(e) => updateSocialLink(social.id, 'platform', e.target.value)}
                    placeholder="Platform"
                    className="col-span-3 h-8 text-sm"
                  />
                  <Input
                    value={social.url}
                    onChange={(e) => updateSocialLink(social.id, 'url', e.target.value)}
                    placeholder="https://..."
                    className="col-span-5 h-8 text-sm"
                  />
                  <Input
                    value={social.icon}
                    onChange={(e) => updateSocialLink(social.id, 'icon', e.target.value)}
                    placeholder="Icon"
                    className="col-span-3 h-8 text-sm"
                  />
                  <Button variant="ghost" size="icon" className="col-span-1 h-8 w-8" onClick={() => removeSocialLink(social.id)}>
                    <FaTrash className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <Button onClick={addSocialLink} variant="outline" size="sm" className="w-fit h-8">
                <FaPlus className="mr-1.5 h-3 w-3" /> Add Social Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">General Settings</CardTitle>
              <CardDescription className="text-xs">Configure general footer settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                <Label className="text-sm">Copyright Text</Label>
                <Input
                  value={footer.copyrightText}
                  onChange={(e) => setFooter({ ...footer, copyrightText: e.target.value })}
                  placeholder="© 2024 Your Company. All rights reserved."
                  className="h-8 text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
