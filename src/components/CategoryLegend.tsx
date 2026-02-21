import { CATEGORY_COLORS, CATEGORY_LABELS, Category } from '../data/careerData';

const categories: Category[] = ['education', 'work', 'project', 'award', 'life'];

export default function CategoryLegend() {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 12,
                padding: '0 16px',
                marginBottom: 24,
            }}
        >
            {categories.map((cat) => (
                <div
                    key={cat}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#94a3b8',
                    }}
                >
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: 3,
                            backgroundColor: CATEGORY_COLORS[cat].border,
                        }}
                    />
                    {CATEGORY_LABELS[cat]}
                </div>
            ))}
        </div>
    );
}
