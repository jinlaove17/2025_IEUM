import { ReactNode } from "react"
import { Drawer } from "vaul"

interface EmDrawerProps {
  open: boolean
  onOpenChange: () => void
  trigger: ReactNode
  children: ReactNode
}

const EmDrawer = ({ open, onOpenChange, trigger, children }: EmDrawerProps) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Trigger>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-em-black/30 max-w-[600px] mx-auto" />
        <Drawer.Content className="fixed bottom-0 z-[110] left-0 right-0 outline-none h-fit max-w-[600px] mx-auto">
          <Drawer.Title />
          <Drawer.Description />
          <div className="relative pt-6 rounded-t-2xl bg-em-white">
            <div className="absolute h-2 -translate-x-1/2 rounded-full w-14 top-2 left-1/2 bg-em-gray" />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default EmDrawer
