// دالة تشغيل صوتك الحقيقي المسجل للكلمة
function playMyVoice(wordText, audioFileName) {
    // تشغيل مؤثر النقر السيبراني إن وجد
    if (typeof playCyberSound === 'function') {
        playCyberSound('click');
    }

    // إنشاء عنصر صوت جديد وتشغيل الملف الخاص بك
    // (افترضنا أن ملفاتك موجودة في مجلد اسمه audio، استبدله بالمجلد الذي تفضله)
    const audioPath = `./audio/${audioFileName}.mp3`;
    const voiceAudio = new Audio(audioPath);

    voiceAudio.play().then(() => {
        if (typeof showToast === 'function') {
            showToast(`🔊 جاري تشغيل صوتك لكلمة: "${wordText}"`);
        }
    }).catch(e => {
        console.error("تعذر العثور على ملف الصوت:", e);
        if (typeof showToast === 'function') {
            showToast(`⚠️ عذراً، ملف الصوت الخاص بـ "${wordText}" غير متوفر`);
        }
    });
}
