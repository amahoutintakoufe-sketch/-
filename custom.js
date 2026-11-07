function toggleAudio() {
    const audio = document.getElementById("customAudio");
    const btn = document.getElementById("playPauseBtn");
    const btnIcon = document.getElementById("btnIcon");
    const statusText = document.getElementById("audioStatus");

    // تشغيل مؤثر الصوت الخاص بالنظام إن وجد
    if (typeof playCyberSound === 'function') {
        playCyberSound('click');
    }

    if (audio.paused) {
        // إيقاف أي أصوات أخرى منعاً لتداخل الصوت
        document.querySelectorAll("audio").forEach(a => {
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
            }
        });

        audio.play().then(() => {
            btn.classList.add("playing");
            btnIcon.textContent = "⏸"; 
            statusText.textContent = "جاري التشغيل...";
            statusText.style.color = "var(--green, #4ade80)";
            if (typeof showToast === 'function') showToast("تم بدء تشغيل الصوت ✓");
        }).catch(e => {
            console.error("خطأ في تشغيل الملف الصوتي:", e);
            if (typeof showToast === 'function') showToast("تعذر تشغيل ملف الصوت!");
        });
    } else {
        audio.pause();
        btn.classList.remove("playing");
        btnIcon.textContent = "▶"; 
        statusText.textContent = "متوقف مؤقتاً";
        statusText.style.color = "var(--text-muted, #94a3b8)";
        if (typeof showToast === 'function') showToast("تم إيقاف الصوت مؤقتاً");
    }

    audio.onended = function() {
        btn.classList.remove("playing");
        btnIcon.textContent = "▶";
        statusText.textContent = "انتهى المقطع";
        statusText.style.color = "var(--text-muted, #94a3b8)";
    };
}
