import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { CareerNode, CATEGORY_COLORS, CATEGORY_LABELS } from '../data/careerData';

interface Props {
    node: CareerNode | null;
    onClose: () => void;
}

export default function DetailModal({ node, onClose }: Props) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <AnimatePresence>
            {node && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        padding: '16px 12px',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.25 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: 440,
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            backgroundColor: '#0f172a',
                            border: `2px solid ${CATEGORY_COLORS[node.category].border}`,
                            borderRadius: 16,
                            padding: '20px 16px',
                            boxShadow: `0 0 40px ${CATEGORY_COLORS[node.category].glow}`,
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                background: 'none',
                                border: 'none',
                                color: '#64748b',
                                cursor: 'pointer',
                                padding: 4,
                            }}
                        >
                            <X size={20} />
                        </button>

                        {/* Category badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 11,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: CATEGORY_COLORS[node.category].text,
                                backgroundColor: CATEGORY_COLORS[node.category].bg,
                                border: `1px solid ${CATEGORY_COLORS[node.category].border}`,
                                borderRadius: 20,
                                padding: '3px 10px',
                                marginBottom: 16,
                            }}
                        >
                            {CATEGORY_LABELS[node.category]}
                        </div>

                        {/* Logo + Title header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                            {node.logo && (
                                <img
                                    src={node.logo}
                                    alt=""
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 10,
                                        objectFit: 'contain',
                                        backgroundColor: '#fff',
                                        padding: 3,
                                        flexShrink: 0,
                                    }}
                                />
                            )}
                            <div>
                                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>
                                    {node.title}
                                </h3>
                                {node.subtitle && (
                                    <p style={{ margin: '2px 0 0', fontSize: 13, color: '#94a3b8' }}>
                                        {node.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Time range */}
                        <p style={{ margin: '12px 0 0', fontSize: 13, color: '#64748b' }}>
                            📅 {node.timeRange}
                        </p>

                        {/* Description */}
                        <p style={{ margin: '12px 0 0', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}>
                            {node.description}
                        </p>

                        {/* Tags */}
                        {node.tags.length > 0 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                    marginTop: 16,
                                }}
                            >
                                {node.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: '#94a3b8',
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: 6,
                                            padding: '2px 8px',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* URL link */}
                        {node.url && (
                            <a
                                href={node.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    marginTop: 16,
                                    fontSize: 13,
                                    color: CATEGORY_COLORS[node.category].text,
                                    textDecoration: 'none',
                                }}
                            >
                                <ExternalLink size={14} />
                                {node.url.replace('https://', '')}
                            </a>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
