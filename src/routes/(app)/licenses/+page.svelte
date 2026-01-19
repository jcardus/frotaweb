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
            body: 'expiration=2026-01-26T00%3A00%3A00.000Z'
        }).then(res => res.text())
    })
</script>
<iframe src="https://licenses.lovable.app?token={token}" class="w-full h-screen border-0">
</iframe>


