import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllWebSettings, updateFooterSettings, toggleWebSettings } from '@/serverActions/web-settings.api'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Plus, Trash2, GripVertical, Loader2, Globe } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/web-settings')({
  head: () => ({ meta: [{ title: 'Web Settings | Flame Nodes Admin' }] }),
  component: WebSettingsPage,
})

function WebSettingsPage() {
  const qc = useQueryClient()
  const { data: settings } = useSuspenseQuery({
    queryKey: ['web-settings'],
    queryFn: () => getAllWebSettings(),
  })

  const enabled = settings.feature_enabled?.enabled || false
  const footerData = settings.footer || {
    categories: [],
    socialLinks: [],
    copyrightText: '© 2024 Flame Nodes. All rights reserved.',
  }

  const [footer, setFooter] = useState(footerData)

  const toggleMutation = useMutation({
    mutationFn: (enabled: boolean) => toggleWebSettings({ data: { enabled } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['web-settings'] })
      qc.invalidateQueries({ queryKey: ['web-settings-enabled'] })
      toast.success('Settings updated')
    },
  })

  const saveFooterMutation = useMutation({
    mutationFn: () => updateFooterSettings({ data: footer }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['web-settings'] })
      qc.invalidateQueries({ queryKey: ['footer-settings'] })
      toast.success('Footer updated successfully')
    },
    onError: () => toast.error('Failed to update footer'),
  })

  const addCategory = () => {
    setFooter(f => ({
      ...f,
      categories: [...f.categories, {
        id: crypto.randomUUID(),
        title: 'New Category',
        sortOrder: f.categories.length,
        links: [],
      }],
    }))
  }

  const removeCategory = (id: string) => {
    setFooter(f => ({
      ...f,
      categories: f.categories.filter(c => c.id !== id),
    }))
  }

  const updateCategory = (id: string, title: string) => {
    setFooter(f => ({
      ...f,
      categories: f.categories.map(c => c.id === id ? { ...c, title } : c),
    }))
  }

  const addLink = (categoryId: string) => {
    setFooter(f => ({
      ...f,
      categories: f.categories.map(c => 
        c.id === categoryId
          ? {
              ...c,
              links: [...c.links, {
                id: crypto.randomUUID(),
                label: 'New Link',
                url: '/',
                sortOrder: c.links.length,
              }],
            }
          : c
      ),
    }))
  }

  const removeLink = (categoryId: string, linkId: string) => {
    setFooter(f => ({
      ...f,
      categories: f.categories.map(c =>
        c.id === categoryId
          ? { ...c, links: c.links.filter(l => l.id !== linkId) }
          : c
      ),
    }))
  }

  const updateLink = (categoryId: string, linkId: string, field: string, value: string) => {
    setFooter(f => ({
      ...f,
      categories: f.categories.map(c =>
        c.id === categoryId
          ? {
              ...c,
              links: c.links.map(l =>
                l.id === linkId ? { ...l, [field]: value } : l
              ),
            }
          : c
      ),
    }))
  }

  const addSocialLink = () => {
    setFooter(f => ({
      ...f,
      socialLinks: [...f.socialLinks, {
        id: crypto.randomUUID(),
        platform: 'Twitter',
        url: 'https://twitter.com/',
        icon: 'Twitter',
        sortOrder: f.socialLinks.length,
      }],
    }))
  }

  const removeSocialLink = (id: string) => {
    setFooter(f => ({
      ...f,
      socialLinks: f.socialLinks.filter(s => s.id !== id),
    }))
  }

  const updateSocialLink = (id: string, field: string, value: string) => {
    setFooter(f => ({
      ...f,
      socialLinks: f.socialLinks.map(s =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    }))
  }

  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Web Settings</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Customize your website appearance and content
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Feature Toggle
              </CardTitle>
              <CardDescription>Enable or disable custom web settings</CardDescription>
            </div>
            <Switch
              checked={enabled}
              onCheckedChange={(checked) => toggleMutation.mutate(checked)}
              disabled={toggleMutation.isPending}
            />
          </div>
        </CardHeader>
        {enabled && (
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ✅ Custom web settings are active. Configure your footer and other settings below.
            </p>
          </CardContent>
        )}
        {!enabled && (
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ❌ Using default hardcoded settings. Enable to customize your website.
            </p>
          </CardContent>
        )}
      </Card>

      {enabled && (
        <Tabs defaultValue="footer" className="space-y-6">
          <TabsList>
            <TabsTrigger value="footer">Footer</TabsTrigger>
            <TabsTrigger value="seo">SEO (Coming Soon)</TabsTrigger>
            <TabsTrigger value="general">General (Coming Soon)</TabsTrigger>
          </TabsList>

          <TabsContent value="footer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Footer Categories & Links</CardTitle>
                <CardDescription>Manage footer navigation sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {footer.categories.map((category, idx) => (
                  <div key={category.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <Field className="flex-1">
                        <FieldLabel>Category Title</FieldLabel>
                        <Input
                          value={category.title}
                          onChange={(e) => updateCategory(category.id, e.target.value)}
                          placeholder="e.g., Products"
                        />
                      </Field>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive"
                        onClick={() => removeCategory(category.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="ml-7 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Links</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addLink(category.id)}
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          Add Link
                        </Button>
                      </div>

                      {category.links.map((link) => (
                        <div key={link.id} className="grid grid-cols-2 gap-3 items-end">
                          <Field>
                            <FieldLabel>Label</FieldLabel>
                            <Input
                              value={link.label}
                              onChange={(e) => updateLink(category.id, link.id, 'label', e.target.value)}
                              placeholder="Link Text"
                            />
                          </Field>
                          <Field>
                            <FieldLabel>URL</FieldLabel>
                            <div className="flex gap-2">
                              <Input
                                value={link.url}
                                onChange={(e) => updateLink(category.id, link.id, 'url', e.target.value)}
                                placeholder="/page"
                              />
                              <Button
                                size="icon"
                                variant="ghost"
                                className="text-destructive"
                                onClick={() => removeLink(category.id, link.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </Field>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <Button onClick={addCategory} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>Manage social media links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {footer.socialLinks.map((social) => (
                  <div key={social.id} className="grid grid-cols-3 gap-3 items-end">
                    <Field>
                      <FieldLabel>Platform</FieldLabel>
                      <Input
                        value={social.platform}
                        onChange={(e) => updateSocialLink(social.id, 'platform', e.target.value)}
                        placeholder="Twitter"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Icon (Lucide)</FieldLabel>
                      <Input
                        value={social.icon}
                        onChange={(e) => updateSocialLink(social.id, 'icon', e.target.value)}
                        placeholder="Twitter"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>URL</FieldLabel>
                      <div className="flex gap-2">
                        <Input
                          value={social.url}
                          onChange={(e) => updateSocialLink(social.id, 'url', e.target.value)}
                          placeholder="https://..."
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-destructive"
                          onClick={() => removeSocialLink(social.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Field>
                  </div>
                ))}

                <Button onClick={addSocialLink} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Social Link
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copyright Text</CardTitle>
              </CardHeader>
              <CardContent>
                <Field>
                  <FieldLabel>Copyright Text</FieldLabel>
                  <Input
                    value={footer.copyrightText}
                    onChange={(e) => setFooter(f => ({ ...f, copyrightText: e.target.value }))}
                    placeholder="© 2024 Your Company. All rights reserved."
                  />
                  <FieldDescription>Text shown at the bottom of the footer</FieldDescription>
                </Field>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                onClick={() => saveFooterMutation.mutate()}
                disabled={saveFooterMutation.isPending}
              >
                {saveFooterMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Save Footer Settings
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="seo">
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                SEO settings coming soon...
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="general">
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                General settings coming soon...
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </main>
  )
}
