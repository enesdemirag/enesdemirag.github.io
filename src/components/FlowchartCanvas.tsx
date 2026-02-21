import { useState, useRef, useEffect } from 'react';
import { nodes, edges, eras, NODE_W, NODE_H, CANVAS_W, CANVAS_H } from '../data/careerData';
import FlowchartNode from './FlowchartNode';
import DetailModal from './DetailModal';
import CategoryLegend from './CategoryLegend';
import type { CareerNode } from '../data/careerData';

export default function FlowchartCanvas() {
    const [selectedNode, setSelectedNode] = useState<CareerNode | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [viewportWidth, setViewportWidth] = useState(CANVAS_W);

    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    useEffect(() => {
        function updateWidth() {
            if (!containerRef.current) return;
            setViewportWidth(containerRef.current.offsetWidth);
        }
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const isMobile = viewportWidth < 768;


    const nodeWidth = isMobile ? 72 : NODE_W;
    const nodeHeight = isMobile ? 72 : NODE_H;

    const padding = isMobile ? 16 : 20;
    const safeWidth = isMobile ? viewportWidth - (padding * 2) - nodeWidth : CANVAS_W - (padding * 2) - nodeWidth;

    const getScaledX = (originalX: number) => {
        if (!isMobile) return originalX;
        // Map 0-1200 original coordinates to the safe viewport area
        const normalizedX = originalX / CANVAS_W;
        return (normalizedX * safeWidth) + (nodeWidth / 2) + padding;
    };

    return (
        <>
            <CategoryLegend />

            <div
                ref={containerRef}
                style={{
                    width: '100%',
                    position: 'relative',
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: isMobile ? '100%' : CANVAS_W,
                        height: CANVAS_H,
                        margin: '0 auto',
                    }}
                >
                    {/* Era background bands */}
                    {eras.map((era) => (
                        <div
                            key={era.label}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: era.yStart,
                                width: '100%',
                                height: era.yEnd - era.yStart,
                                borderRadius: 12,
                                background: 'linear-gradient(135deg, rgba(30,41,59,0.3) 0%, rgba(15,23,42,0.1) 100%)',
                                border: '1px solid rgba(51,65,85,0.2)',
                                pointerEvents: 'none',
                            }}
                        >
                            <span
                                style={{
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: 0,
                                    width: '100%',
                                    marginBottom: 8,
                                    textAlign: 'center',
                                    fontSize: 11,
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    color: 'rgba(148,163,184,0.6)',
                                }}
                            >
                                {era.label}
                            </span>
                        </div>
                    ))}

                    {/* SVG layer for edges */}
                    <svg
                        width="100%"
                        height={CANVAS_H}
                        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
                    >
                        {edges.map((edge) => {
                            const from = nodeMap.get(edge.from);
                            const to = nodeMap.get(edge.to);
                            if (!from || !to) return null;

                            const x1 = getScaledX(to.x);
                            const y1 = to.y - nodeHeight / 2;
                            const x2 = getScaledX(from.x);
                            const y2 = from.y + nodeHeight / 2;
                            const midY = (y1 + y2) / 2;

                            return (
                                <path
                                    key={`${edge.from}-${edge.to}`}
                                    d={`M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`}
                                    fill="none"
                                    stroke="#334155"
                                    strokeWidth={isMobile ? 1.5 : 2}
                                    strokeLinecap="round"
                                />
                            );
                        })}
                    </svg>

                    {/* Node layer */}
                    {nodes.map((node) => (
                        <div
                            key={node.id}
                            style={{
                                position: 'absolute',
                                left: getScaledX(node.x),
                                top: node.y,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 10,
                            }}
                        >
                            <FlowchartNode
                                node={node}
                                onClick={setSelectedNode}
                                isMobile={isMobile}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <DetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />
        </>
    );
}
