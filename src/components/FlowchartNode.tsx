import { CareerNode, CATEGORY_COLORS, NODE_W, NODE_H } from '../data/careerData';

interface Props {
    node: CareerNode;
    onClick: (node: CareerNode) => void;
    isMobile: boolean;
}

export default function FlowchartNode({ node, onClick, isMobile }: Props) {
    const colors = CATEGORY_COLORS[node.category];

    // Square boxes for mobile to fit better
    const size = 72;
    const width = isMobile ? size : NODE_W;
    const height = isMobile ? size : NODE_H;

    return (
        <div
            className="flowchart-node group"
            style={{
                width: width,
                height: height,
                backgroundColor: colors.bg,
                border: `1.5px solid ${colors.border}`,
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: isMobile ? 0 : 10,
                padding: isMobile ? '4px 6px' : '8px 12px',
                boxSizing: 'border-box',
                transition: 'transform 0.2s, box-shadow 0.2s',
                overflow: 'hidden',
                zIndex: 1,
            }}
            onClick={() => onClick(node)}
            onMouseEnter={(e) => {
                if (!isMobile) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${colors.glow}, 0 0 40px ${colors.glow}`;
                    (e.currentTarget as HTMLDivElement).style.zIndex = '10';
                }
            }}
            onMouseLeave={(e) => {
                if (!isMobile) {
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLDivElement).style.zIndex = '1';
                }
            }}
        >
            {node.logo && !isMobile && (
                <img
                    src={node.logo}
                    alt=""
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        objectFit: 'contain',
                        backgroundColor: '#fff',
                        padding: 2,
                        flexShrink: 0,
                        // Ensure it stays on the left but allows the text area to expand
                    }}
                />
            )}
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center', // Center content horizontally in the flex container
                    textAlign: 'center'   // Center text lines
                }}
            >
                <div
                    style={{
                        fontSize: isMobile ? 6 : 10,
                        color: '#94a3b8',
                        lineHeight: 1.1,
                        whiteSpace: 'nowrap',
                        marginBottom: 1,
                    }}
                >
                    {node.timeRange}
                </div>
                <div
                    style={{
                        fontSize: isMobile ? 8 : 12,
                        fontWeight: 600,
                        color: colors.text,
                        lineHeight: 1.1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {node.title}
                </div>
            </div>
        </div>
    );
}
