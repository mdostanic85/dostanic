'use client'

import { useMemo } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  MarkerType,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeProps,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { cn } from '@/lib/utils'

type FlowNodeData = {
  label: string
  variant?: 'start' | 'hub' | 'end' | 'default'
}

function FlowNode({ data }: NodeProps<Node<FlowNodeData>>) {
  const variant = data.variant ?? 'default'
  return (
    <div
      className={cn(
        'min-w-[120px] max-w-[160px] rounded-[8px] border px-3 py-2 text-center text-[11px] font-medium leading-snug shadow-sm',
        variant === 'start' && 'border-accent bg-accent/10 text-foreground',
        variant === 'hub' && 'border-foreground bg-foreground text-inverse-foreground',
        variant === 'end' && 'border-stroke bg-surface text-muted',
        variant === 'default' && 'border-stroke bg-surface text-foreground',
      )}
    >
      <Handle type="target" position={Position.Top} className="!bg-accent !w-2 !h-2" />
      {data.label}
      <Handle type="source" position={Position.Bottom} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}

const INITIAL_NODES: Node<FlowNodeData>[] = [
  { id: 'open', type: 'flowNode', position: { x: 280, y: 0 }, data: { label: 'Open app', variant: 'start' } },
  { id: 'splash', type: 'flowNode', position: { x: 280, y: 70 }, data: { label: 'Splash' } },
  { id: 'onboarding', type: 'flowNode', position: { x: 280, y: 140 }, data: { label: 'Onboarding' } },
  { id: 'auth', type: 'flowNode', position: { x: 280, y: 210 }, data: { label: 'Auth' } },
  { id: 'guest', type: 'flowNode', position: { x: 80, y: 300 }, data: { label: 'Guest' } },
  { id: 'signup', type: 'flowNode', position: { x: 280, y: 300 }, data: { label: 'Sign up' } },
  { id: 'login', type: 'flowNode', position: { x: 480, y: 300 }, data: { label: 'Login' } },
  { id: 'reset', type: 'flowNode', position: { x: 620, y: 380 }, data: { label: 'Reset password' } },
  { id: 'home', type: 'flowNode', position: { x: 280, y: 400 }, data: { label: 'Home', variant: 'hub' } },
  { id: 'projects', type: 'flowNode', position: { x: 0, y: 520 }, data: { label: 'Manage projects' } },
  { id: 'feed', type: 'flowNode', position: { x: 140, y: 520 }, data: { label: 'Feed' } },
  { id: 'idea', type: 'flowNode', position: { x: 280, y: 520 }, data: { label: 'Submit idea' } },
  { id: 'search', type: 'flowNode', position: { x: 420, y: 520 }, data: { label: 'Search' } },
  { id: 'profile', type: 'flowNode', position: { x: 560, y: 520 }, data: { label: 'Profile' } },
  { id: 'list', type: 'flowNode', position: { x: -40, y: 640 }, data: { label: 'Project list' } },
  { id: 'details', type: 'flowNode', position: { x: -40, y: 720 }, data: { label: 'Details' } },
  { id: 'boost', type: 'flowNode', position: { x: -40, y: 800 }, data: { label: 'Boost', variant: 'end' } },
  { id: 'form', type: 'flowNode', position: { x: 240, y: 640 }, data: { label: 'Idea form' } },
  { id: 'category', type: 'flowNode', position: { x: 240, y: 720 }, data: { label: 'Category' } },
  { id: 'description', type: 'flowNode', position: { x: 240, y: 800 }, data: { label: 'Description' } },
  { id: 'submit', type: 'flowNode', position: { x: 240, y: 880 }, data: { label: 'Submit' } },
  { id: 'done', type: 'flowNode', position: { x: 240, y: 960 }, data: { label: 'Done', variant: 'end' } },
]

const INITIAL_EDGES: Edge[] = [
  { id: 'e1', source: 'open', target: 'splash', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2', source: 'splash', target: 'onboarding', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3', source: 'onboarding', target: 'auth', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4', source: 'auth', target: 'guest', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5', source: 'auth', target: 'signup', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6', source: 'auth', target: 'login', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7', source: 'login', target: 'reset', label: 'Forgot', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8', source: 'guest', target: 'home', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e9', source: 'signup', target: 'home', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e10', source: 'login', target: 'home', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e11', source: 'home', target: 'projects', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e12', source: 'home', target: 'feed', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e13', source: 'home', target: 'idea', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e14', source: 'home', target: 'search', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e15', source: 'home', target: 'profile', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e16', source: 'projects', target: 'list', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e17', source: 'list', target: 'details', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e18', source: 'details', target: 'boost', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e19', source: 'idea', target: 'form', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e20', source: 'form', target: 'category', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e21', source: 'category', target: 'description', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e22', source: 'description', target: 'submit', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e23', source: 'submit', target: 'done', markerEnd: { type: MarkerType.ArrowClosed } },
]

/** Interactive user flow — built with React Flow (@xyflow/react). */
export default function UserFlowDiagram() {
  const nodes = useMemo(() => INITIAL_NODES, [])
  const edges = useMemo(() => INITIAL_EDGES, [])
  const nodeTypes = useMemo(() => ({ flowNode: FlowNode }), [])

  return (
    <div className="h-[min(72vh,720px)] w-full overflow-hidden rounded-[10px] border border-stroke bg-background">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.35}
          maxZoom={1.2}
          proOptions={{ hideAttribution: true }}
          className="!bg-background"
        >
          <Background gap={20} size={1} color="var(--color-stroke)" />
          <Controls className="!border-stroke !bg-surface !shadow-none [&>button]:!border-stroke [&>button]:!bg-surface" />
          <MiniMap
            className="!border-stroke !bg-surface"
            nodeColor={() => 'var(--color-accent)'}
            maskColor="rgba(0,0,0,0.6)"
          />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
