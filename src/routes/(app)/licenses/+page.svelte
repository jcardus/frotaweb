<script>
    import {onMount} from "svelte";
    const {data} = $props()
    let token=$state('')
    onMount(async () => {
        console.log(data.session.id)
        token = await fetch('/api/session/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `expiration=${new Date(Date.now() + 1000*60*60).toISOString()}`
        }).then(res => res.text())
    })
</script>
<iframe src="https://licenses.lovable.app?token={token}" class="w-full h-screen border-0">
</iframe>


