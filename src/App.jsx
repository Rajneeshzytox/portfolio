import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./components/ui/button"

import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"


function App() {


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />

      <Button variant="outline">Outline</Button>

      <Card className="w-1/2">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

<div className="bg-primary text-primary-foreground">Hello</div>
    </ThemeProvider>

    </>
  )
}

export default App
