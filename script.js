function analyzeNews() {
  const news = document.getElementById("news").value;
  const result = document.getElementById("result");

  if (news.trim() === "") {
    result.innerHTML = "أدخل نص الخبر أولًا.";
    return;
  }

  result.innerHTML = `
    <h3>زاوية إعلامية مقترحة</h3>
    <p>ما الأثر الحقيقي لهذا الخبر؟ ومن المستفيد منه؟</p>

    <h3>عنوان مقترح</h3>
    <p>ما الذي لا يقوله الخبر مباشرة؟</p>

    <h3>سؤال تبيان</h3>
    <p>ماذا يعني هذا التطور فعليًا؟</p>

    <h3>فكرة فيديو قصير</h3>
    <p>ابدأ بأهم رقم أو معلومة، ثم اشرح أثرها خلال 20 ثانية.</p>
  `;
}
