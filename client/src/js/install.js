const Install = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    Install.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
Install.addEventListener('click', async () => {
    const promptEv = window.deferredPrompt;
    if(!promptEv){
        return;
    }
    promptEv.prompt();
    window.deferredPrompt = null;
    Install.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {window.deferredPrompt = null});
