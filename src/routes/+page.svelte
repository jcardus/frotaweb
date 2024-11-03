<script lang='ts'>
    import {
        VisSingleContainer,
        VisDonut,
        VisBulletLegend,
        VisXYContainer,
        VisTimeline
    } from '@unovis/svelte'
    import { countBy } from '$lib'
    let { data } = $props();

    const grouped = countBy(data.devices, 'status')

    const legendItems = Object.entries(grouped).map(([_, grouped]) => ({
        name: grouped.category.charAt(0).toUpperCase() + grouped.category.slice(1),
        color: {
            offline: '#ff6b7d',
            online: '#a6cc74',
            unknown: '#4d8cfd'
        }[grouped.category]
    }))


    let times = data.devices.map(d => ({
        timestamp: new Date(d.lastUpdate),
        length: 1,
        type: d.name
    }))
    const x = (d) => d.timestamp
</script>

<div class="grid grid-cols-3 gap-3 p-2 text-center">

        <div>
        <h3>Estados dos dispositivos</h3>
        <VisBulletLegend items={legendItems} />
        <VisSingleContainer>
            <VisDonut
                    value={d => d.count}
                    data="{grouped}"
                    color="{d => ({
                        offline: '#ff6b7d',
                        online: '#a6cc74',
                        unknown: '#4d8cfd'
                    }[d.category])}"
                    showEmptySegments={true}
                    padAngle={0.01}
                    arcWidth={50}
            />
        </VisSingleContainer>
    </div>
    <div>
        <VisXYContainer data="{times}">
            <VisTimeline {x}/>
        </VisXYContainer>
    </div>
</div>
