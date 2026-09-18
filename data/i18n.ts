import { demoPrompts, faqs, features, plans, testimonials } from "@/data/site";

export type Locale = "en" | "vi";

const en = {
  meta: {
    title: "StudyFlow AI — Make every study session click",
    description: "A concept study workspace for clearer answers, better practice, and a plan that fits your week. Explore the interactive StudyFlow AI frontend demo.",
  },
  skip: "Skip to content",
  nav: {
    aria: "Main navigation", links: ["Features", "How it works", "Live demo", "Pricing"], cta: "Start learning",
    open: "Open menu", close: "Close menu", language: "Language",
  },
  hero: {
    badge: "Your study space, reimagined", title1: "A little clarity", title2: "changes everything.",
    description: "Meet your AI study partner for clearer answers, better practice, and a plan that actually fits your week.",
    cta: "Start learning free", secondary: "See how it works", note: "No sign-up needed for this interactive preview",
    notes: "Notes, simplified", keyIdeas: "Key ideas in seconds", tutor: "AI tutor", session: "TODAY'S LEARNING SESSION",
    question: "Explain React useEffect in simple terms.", answer1: "Think of", answer1Rest: "as a note to React: “After you show this screen, do this extra task.”",
    answer2: "For example, after a page appears, you might fetch your study notes or update its title.",
    example: "Give an example", quiz: "Quiz me", next: "Ask your next question...", encouragement: "You've got this!", mastered: "3 topics mastered this week",
  },
  social: { aria: "Example study topics", lead1: "Made for all the ways", lead2: "you learn", subjects: ["Coding", "Science", "Humanities", "Exam prep", "And beyond"], foot: "Concept project · sample experience" },
  problem: {
    eyebrow: "The problem", title1: "Studying shouldn't feel like", title2: "starting over.",
    description: "You have the notes. You have the questions. What you need is a way to connect the dots and keep moving.",
    link: "See what StudyFlow can do",
    items: [
      { title: "Too much to sort through", text: "Find the point in your notes without losing the context." },
      { title: "Still not quite clicking", text: "Ask the follow-up question and get a fresh explanation." },
      { title: "No clear next step", text: "Turn a big goal into a study session you can start today." },
    ],
  },
  features: {
    eyebrow: "The toolkit", title1: "Everything you need to", title2: "get unstuck.",
    description: "One thoughtful space for the questions, notes, practice, and plans that move learning forward.",
    items: features,
    visual: { question: "What is photosynthesis, really?", answer: "It's how plants turn sunlight into the energy they need to grow.",
      takeaways: "✦ 3 key takeaways", check: "Check your understanding", optionA: "Option A", optionB: "Option B",
      days: ["MON", "TUE", "WED"], tasks: ["Review chapter 4", "Practice quiz", "Recap & revise"],
      file: "Biology notes.pdf", ready: "Ready to explore", focus: "Weekly focus", time: "8h 45m" },
  },
  demo: {
    eyebrow: "Interactive preview", title1: "Go ahead. Ask", title2: "the question.",
    description: "Try a sample prompt and see how StudyFlow helps you get from a question to a clearer next step.",
    suggestion: "NEED A STARTING POINT?", prompts: demoPrompts,
    disclaimer: "Sample responses run locally. No AI service or account required.", tutor: "Tutor", preview: "Preview mode",
    emptyTitle: "What would you like to learn today?", emptyText: "No question is too small. Start with a topic above or ask your own.",
    emptyGuide: "Try “Explain React useEffect simply”", you: "You", thinking: "StudyFlow is thinking",
    followups: ["Give an example", "Quiz me", "Explain simpler"],
    followupPrompts: ["Give me an example of React useEffect", "Quiz me on this topic", "Explain it even simpler"],
    reset: "Reset conversation", ask: "Ask StudyFlow a question", placeholder: "Ask StudyFlow anything...", send: "Send question",
    caution: "StudyFlow can make mistakes. Check important information with your course material.",
    answers: {
      photosynthesis: "Photosynthesis is how plants make food. They use sunlight to turn water and carbon dioxide into sugar for energy, and release oxygen along the way. Think of a leaf as a tiny solar-powered kitchen.",
      quiz: "Let's try active recall. Question 1: What does a React effect let a component do after it renders? A) Change its props  B) Synchronize with something outside React  C) Skip rendering. Pick an answer, then explain why you chose it.",
      plan: "Here's a gentle three-day plan: Day 1, review the core idea for 25 minutes. Day 2, make five practice questions and answer them without notes. Day 3, revisit anything you missed and teach the topic back in your own words.",
      summary: "Here's the short version: 1) Start with the main idea. 2) Keep only the facts that support it. 3) Add one example in your own words. In a full product, you could bring your notes here; this demo uses a sample response.",
      simpler: "Imagine you finish setting up your desk, then remember a task you need to do. React renders the screen first; useEffect handles that extra task afterward. It's often used for things like fetching data or connecting to another system.",
      react: "useEffect tells React to do something after a component appears or updates. For example, a course page can load your saved notes after it renders. Think: show the page first, then do the extra task.",
      fallback: "This interactive preview has a small set of sample answers, so I can't explain every topic yet. Try one of the suggested prompts, or ask about React useEffect or photosynthesis to see how a clear, step-by-step answer could work.",
    },
  },
  how: {
    eyebrow: "How it works", title1: "From messy notes to", title2: "momentum.", description: "A simple flow that meets you wherever you are in the learning process.",
    steps: [
      { title: "Bring what you're learning", text: "Choose a topic, paste notes, or explore a sample document." },
      { title: "Make the ideas click", text: "Ask questions, get a summary, or turn the topic into a quiz." },
      { title: "Practice with purpose", text: "Follow a simple plan and see the progress you're making." },
    ],
  },
  dashboard: {
    eyebrow: "The bigger picture", title1: "Your whole study week,", title2: "in focus.",
    description: "Answers are just the start. Keep your courses, daily plan, and progress together in a space that makes the next step obvious.",
    workspace: "WORKSPACE", navigation: ["Overview", "AI Tutor", "My Courses", "Study Plans", "Quizzes", "Progress"],
    help: "Help & support", plan: "Student plan", dashboard: "Dashboard", learningSpace: "✦ Your learning space",
    date: "WEDNESDAY, APRIL 16", greeting: "Good morning, Maya", encouragement: "You're making progress. Let's keep it going.", newPlan: "New study plan",
    continue: "Continue learning", viewAll: "View all →", courses: ["React Fundamentals", "Data Structures"], lessons: ["12 of 16 lessons complete", "6 of 11 lessons complete"],
    today: "Today's plan", taskCount: "3 tasks", tasks: ["Review React Hooks", "Complete JavaScript quiz", "Data Structures"],
    minutes: "· 30 min", completed: "1 of 3 completed", weekly: "Weekly study time", thisWeek: "This week", time: "8h 45m", change: "↗ 12% from last week",
    chartAria: "Sample weekly study time chart", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    insight: "STUDYFLOW INSIGHT", insightTitle: "Nice work this week!", insightText: "You've practiced consistently for three days. A quick quiz today can help it stick.", insightLink: "Keep the streak going →",
    caption: "Product preview · sample data shown for illustration",
  },
  stats: {
    eyebrow: "Learning in motion", title1: "Small steps", title2: "add up.", description: "A glimpse of what a more focused study routine could make possible.",
    disclosure: "Illustrative demo metrics", labels: ["students learning", "questions answered", "quizzes created", "student rating"],
  },
  testimonials: {
    eyebrow: "Student stories", title1: "A better rhythm for", title2: "every kind of learner.", description: "A few imagined moments from the StudyFlow experience.",
    items: testimonials, stars: "5 out of 5 stars", disclosure: "Fictional student stories created for this demo.",
  },
  pricing: {
    eyebrow: "Simple pricing", title1: "A plan for the way", title2: "you study.", description: "Start with the essentials, then choose more support when you need it.",
    plans, popular: "✦ MOST POPULAR", month: "/ month", includes: "WHAT'S INCLUDED",
    note: "Illustrative pricing for a concept product. No checkout or subscription is available in this demo.",
  },
  faq: {
    eyebrow: "Good to know", title1: "A few good", title2: "questions.", description: "Here are the details behind the idea. Still curious? Try the interactive preview above.",
    link: "Explore the demo →", items: faqs,
  },
  final: { eyebrow: "YOUR NEXT CHAPTER STARTS HERE", title1: "Ready to make", title2: "it click?", description: "Bring the question. We'll help you find the next step.", cta: "Start learning free" },
  footer: {
    description: "A clearer way to learn, one question at a time.", disclaimer: "An independent frontend concept project.",
    groups: [
      { title: "Product", links: ["Features", "AI Tutor", "Study Planner", "Pricing"] },
      { title: "Resources", links: ["Blog (demo)", "Study Guides (demo)", "Help Center (demo)"] },
      { title: "Company", links: ["About", "Contact (demo)", "Careers (demo)"] },
      { title: "Legal", links: ["Privacy (demo)", "Terms (demo)"] },
    ],
    copyright: "© 2026 StudyFlow AI. Demo project.", top: "Back to top", brandAria: "StudyFlow AI, back to top",
  },
};

const vi: typeof en = {
  meta: {
    title: "StudyFlow AI — Học rõ hơn qua từng buổi học",
    description: "Không gian học tập giúp bạn hiểu rõ kiến thức, luyện tập hiệu quả và lên kế hoạch phù hợp. Khám phá bản xem trước tương tác của StudyFlow AI.",
  },
  skip: "Đi đến nội dung chính",
  nav: { aria: "Điều hướng chính", links: ["Tính năng", "Cách hoạt động", "Dùng thử", "Bảng giá"], cta: "Bắt đầu học", open: "Mở menu", close: "Đóng menu", language: "Ngôn ngữ" },
  hero: {
    badge: "Không gian học tập theo cách mới", title1: "Hiểu rõ hơn một chút,", title2: "tiến xa hơn rất nhiều.",
    description: "Gặp gỡ trợ lý học tập AI giúp bạn tìm lời giải dễ hiểu, luyện tập hiệu quả và có kế hoạch phù hợp với tuần của mình.",
    cta: "Bắt đầu học miễn phí", secondary: "Xem cách hoạt động", note: "Không cần đăng ký để dùng thử bản xem trước này",
    notes: "Ghi chú dễ hiểu", keyIdeas: "Nắm ý chính trong vài giây", tutor: "Trợ lý AI", session: "BUỔI HỌC HÔM NAY",
    question: "Giải thích React useEffect thật đơn giản.", answer1: "Hãy xem", answer1Rest: "như một lời nhắn cho React: “Sau khi hiển thị màn hình, hãy làm thêm việc này.”",
    answer2: "Ví dụ, sau khi trang hiện ra, bạn có thể tải ghi chú học tập hoặc cập nhật tiêu đề trang.",
    example: "Cho ví dụ", quiz: "Đố tôi", next: "Đặt câu hỏi tiếp theo...", encouragement: "Bạn làm được!", mastered: "Đã nắm vững 3 chủ đề tuần này",
  },
  social: { aria: "Các chủ đề học tập mẫu", lead1: "Phù hợp với mọi", lead2: "cách bạn học", subjects: ["Lập trình", "Khoa học", "Nhân văn", "Ôn thi", "Và hơn thế"], foot: "Dự án ý tưởng · trải nghiệm mẫu" },
  problem: {
    eyebrow: "Vấn đề", title1: "Học tập không nên giống như", title2: "bắt đầu lại từ đầu.",
    description: "Bạn có ghi chú và câu hỏi. Điều bạn cần là cách kết nối các ý để tiếp tục tiến bộ.", link: "Khám phá StudyFlow",
    items: [
      { title: "Quá nhiều thứ cần sắp xếp", text: "Tìm ý chính trong ghi chú mà vẫn giữ được ngữ cảnh." },
      { title: "Vẫn chưa thật sự hiểu", text: "Hỏi tiếp và nhận một cách giải thích khác dễ hiểu hơn." },
      { title: "Chưa biết bước tiếp theo", text: "Chia mục tiêu lớn thành một buổi học có thể bắt đầu ngay hôm nay." },
    ],
  },
  features: {
    eyebrow: "Bộ công cụ", title1: "Mọi thứ bạn cần để", title2: "học thông suốt.",
    description: "Một nơi gọn gàng cho câu hỏi, ghi chú, bài luyện tập và kế hoạch giúp bạn tiến bộ.",
    items: [
      { id: "ask", title: "Hỏi đến khi hiểu", description: "Nhận lời giải rõ ràng, ví dụ hữu ích và thoải mái hỏi tiếp.", detail: "Từ bối rối đến sáng tỏ" },
      { id: "summaries", title: "Ghi chú dễ nắm bắt", description: "Rút ra những ý quan trọng từ một bài đọc dài.", detail: "Ý chính trong tầm mắt" },
      { id: "quizzes", title: "Luyện tập thay vì chỉ đọc lại", description: "Tạo bài kiểm tra nhanh để biết mình thực sự nhớ được gì.", detail: "Ghi nhớ chủ động, thật đơn giản" },
      { id: "plans", title: "Có kế hoạch cho cả tuần", description: "Chia mục tiêu lớn thành các buổi học phù hợp với cuộc sống.", detail: "Lộ trình dễ theo" },
      { id: "materials", title: "Học từ tài liệu của bạn", description: "Giữ ghi chú và câu hỏi trong cùng một luồng học tập.", detail: "Tài liệu của bạn, đúng ngữ cảnh" },
      { id: "progress", title: "Thấy được mình đã tiến xa", description: "Theo dõi tiến độ qua chủ đề, bài luyện tập và thời gian học.", detail: "Mỗi bước nhỏ đều đáng giá" },
    ],
    visual: { question: "Quang hợp thực chất là gì?", answer: "Cây dùng ánh sáng mặt trời để tạo năng lượng phát triển.",
      takeaways: "✦ 3 ý chính", check: "Kiểm tra mức độ hiểu", optionA: "Đáp án A", optionB: "Đáp án B",
      days: ["T2", "T3", "T4"], tasks: ["Ôn chương 4", "Làm bài kiểm tra", "Tóm tắt & ôn lại"],
      file: "Ghi chú sinh học.pdf", ready: "Sẵn sàng khám phá", focus: "Mức độ tập trung tuần này", time: "8 giờ 45 phút" },
  },
  demo: {
    eyebrow: "Bản xem trước tương tác", title1: "Cứ hỏi đi.", title2: "Hỏi điều bạn muốn biết.",
    description: "Thử một câu hỏi mẫu để xem StudyFlow giúp bạn tìm ra bước tiếp theo rõ ràng hơn.",
    suggestion: "CHƯA BIẾT HỎI GÌ?", prompts: ["Giải thích React useEffect đơn giản", "Tóm tắt ghi chú của tôi", "Tạo bài kiểm tra nhanh", "Lập kế hoạch học tập"],
    disclaimer: "Câu trả lời mẫu chạy ngay trên trình duyệt. Không cần dịch vụ AI hay tài khoản.", tutor: "Trợ lý", preview: "Chế độ xem trước",
    emptyTitle: "Hôm nay bạn muốn học gì?", emptyText: "Không có câu hỏi nào là quá nhỏ. Chọn một gợi ý ở trên hoặc tự đặt câu hỏi.",
    emptyGuide: "Thử “Giải thích React useEffect đơn giản”", you: "Bạn", thinking: "StudyFlow đang suy nghĩ",
    followups: ["Cho ví dụ", "Đố tôi", "Giải thích đơn giản hơn"],
    followupPrompts: ["Cho tôi ví dụ về React useEffect", "Đố tôi về chủ đề này", "Giải thích đơn giản hơn nữa"],
    reset: "Bắt đầu lại", ask: "Hỏi StudyFlow", placeholder: "Hỏi StudyFlow bất cứ điều gì...", send: "Gửi câu hỏi",
    caution: "StudyFlow có thể mắc lỗi. Hãy đối chiếu thông tin quan trọng với tài liệu học tập của bạn.",
    answers: {
      photosynthesis: "Quang hợp là cách cây tạo ra thức ăn. Cây dùng ánh sáng mặt trời để biến nước và khí carbon dioxide thành đường, đồng thời giải phóng oxy. Hãy tưởng tượng chiếc lá như một căn bếp tí hon dùng năng lượng mặt trời.",
      quiz: "Cùng thử ghi nhớ chủ động nhé. Câu 1: useEffect giúp một thành phần React làm gì sau khi hiển thị? A) Thay đổi props  B) Đồng bộ với thứ bên ngoài React  C) Bỏ qua bước hiển thị. Hãy chọn đáp án và giải thích lý do.",
      plan: "Đây là kế hoạch ba ngày nhẹ nhàng: Ngày 1, ôn ý chính trong 25 phút. Ngày 2, tự tạo năm câu hỏi và trả lời mà không xem ghi chú. Ngày 3, ôn lại phần chưa chắc và thử giảng lại bằng lời của bạn.",
      summary: "Tóm tắt ngắn gọn: 1) Bắt đầu bằng ý chính. 2) Chỉ giữ những dữ kiện làm rõ ý đó. 3) Thêm một ví dụ bằng lời của bạn. Trong sản phẩm hoàn chỉnh, bạn có thể đưa ghi chú vào đây; bản demo này dùng câu trả lời mẫu.",
      simpler: "Hãy tưởng tượng bạn vừa sắp xếp bàn học xong rồi nhớ ra một việc cần làm. React hiển thị màn hình trước; useEffect xử lý việc thêm đó sau. Nó thường dùng để tải dữ liệu hoặc kết nối với một hệ thống khác.",
      react: "useEffect bảo React làm một việc sau khi thành phần xuất hiện hoặc cập nhật. Ví dụ, trang khóa học có thể tải ghi chú đã lưu sau khi hiển thị. Hiểu đơn giản: hiện trang trước, làm việc thêm sau.",
      fallback: "Bản xem trước này chỉ có một số câu trả lời mẫu nên chưa thể giải thích mọi chủ đề. Hãy thử một câu hỏi gợi ý, hoặc hỏi về React useEffect hay quang hợp để xem cách giải thích từng bước.",
    },
  },
  how: {
    eyebrow: "Cách hoạt động", title1: "Từ ghi chú rối rắm đến", title2: "tiến bộ rõ ràng.", description: "Một quy trình đơn giản, phù hợp với bất cứ điểm khởi đầu nào của bạn.",
    steps: [
      { title: "Đưa nội dung bạn đang học vào", text: "Chọn chủ đề, dán ghi chú hoặc xem một tài liệu mẫu." },
      { title: "Hiểu rõ từng ý", text: "Đặt câu hỏi, xem tóm tắt hoặc biến chủ đề thành bài kiểm tra." },
      { title: "Luyện tập có mục tiêu", text: "Theo kế hoạch đơn giản và nhìn thấy sự tiến bộ của mình." },
    ],
  },
  dashboard: {
    eyebrow: "Toàn cảnh", title1: "Cả tuần học của bạn,", title2: "rõ ràng trong tầm mắt.",
    description: "Câu trả lời chỉ là khởi đầu. Quản lý môn học, kế hoạch mỗi ngày và tiến độ ở cùng một nơi.",
    workspace: "KHÔNG GIAN HỌC", navigation: ["Tổng quan", "Trợ lý AI", "Môn học", "Kế hoạch", "Bài kiểm tra", "Tiến độ"],
    help: "Trợ giúp", plan: "Gói Học sinh", dashboard: "Bảng điều khiển", learningSpace: "✦ Không gian học của bạn",
    date: "THỨ TƯ, 16 THÁNG 4", greeting: "Chào buổi sáng, Maya", encouragement: "Bạn đang tiến bộ. Cứ tiếp tục nhé.", newPlan: "Kế hoạch mới",
    continue: "Tiếp tục học", viewAll: "Xem tất cả →", courses: ["Cơ bản về React", "Cấu trúc dữ liệu"], lessons: ["Hoàn thành 12/16 bài", "Hoàn thành 6/11 bài"],
    today: "Kế hoạch hôm nay", taskCount: "3 việc", tasks: ["Ôn React Hooks", "Làm bài kiểm tra JavaScript", "Cấu trúc dữ liệu"],
    minutes: "· 30 phút", completed: "Đã xong 1/3", weekly: "Thời gian học trong tuần", thisWeek: "Tuần này", time: "8 giờ 45 phút", change: "↗ Tăng 12% so với tuần trước",
    chartAria: "Biểu đồ thời gian học mẫu trong tuần", days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    insight: "GỢI Ý TỪ STUDYFLOW", insightTitle: "Tuần này bạn làm tốt lắm!", insightText: "Bạn đã luyện tập đều đặn ba ngày. Một bài kiểm tra nhanh hôm nay sẽ giúp nhớ lâu hơn.", insightLink: "Tiếp tục giữ nhịp →",
    caption: "Bản xem trước sản phẩm · dữ liệu mẫu chỉ để minh họa",
  },
  stats: {
    eyebrow: "Tiến bộ mỗi ngày", title1: "Bước nhỏ tạo nên", title2: "thay đổi lớn.", description: "Hình dung những điều có thể đạt được khi học tập tập trung hơn.",
    disclosure: "Số liệu minh họa cho bản demo", labels: ["người học", "câu hỏi được giải đáp", "bài kiểm tra đã tạo", "đánh giá từ người học"],
  },
  testimonials: {
    eyebrow: "Chuyện của người học", title1: "Nhịp học tốt hơn cho", title2: "mọi kiểu người học.", description: "Một vài tình huống giả định về trải nghiệm StudyFlow.",
    items: [
      { name: "Maya Chen", initials: "MC", field: "Sinh viên khoa học máy tính", quote: "Mình có thể hỏi cả câu tưởng như hiển nhiên rồi nhận được ví dụ thực sự dễ hiểu.", color: "lavender" },
      { name: "Jordan Ellis", initials: "JE", field: "Sinh viên sinh học", quote: "Biến một chương dài thành bài kiểm tra năm phút giúp mình biết mình đã hiểu gì trước giờ học.", color: "mint" },
      { name: "Amara Okafor", initials: "AO", field: "Sinh viên tâm lý học", quote: "Kế hoạch theo tuần khiến một hạn chót lớn trở thành vài buổi chiều có thể xoay xở được.", color: "peach" },
    ],
    stars: "5 trên 5 sao", disclosure: "Những câu chuyện người học hư cấu được tạo cho bản demo này.",
  },
  pricing: {
    eyebrow: "Bảng giá đơn giản", title1: "Gói học phù hợp với", title2: "cách bạn học.", description: "Bắt đầu với tính năng cần thiết rồi chọn thêm hỗ trợ khi cần.",
    plans: [
      { name: "Miễn phí", price: "$0", description: "Khởi đầu để xây dựng thói quen học tập.", features: ["Số câu hỏi AI có giới hạn", "Tóm tắt cơ bản", "5 bài kiểm tra mỗi tháng", "Lập kế hoạch học cơ bản"], cta: "Bắt đầu miễn phí" },
      { name: "Học sinh", price: "$8", description: "Bộ công cụ hằng ngày cho một tuần học trọn vẹn.", features: ["Nhiều câu hỏi AI hơn", "Tóm tắt không giới hạn", "Bài kiểm tra không giới hạn", "Kế hoạch học cá nhân", "Theo dõi tiến độ"], cta: "Chọn gói Học sinh", featured: true },
      { name: "Pro", price: "$15", description: "Hỗ trợ chuyên sâu cho những mục tiêu học tập lớn.", features: ["Mọi tính năng của gói Học sinh", "Phân tích tài liệu nâng cao", "Ưu tiên phản hồi AI", "Phân tích việc học chuyên sâu", "Thêm công cụ tăng năng suất"], cta: "Chọn gói Pro" },
    ],
    popular: "✦ PHỔ BIẾN NHẤT", month: "/ tháng", includes: "BAO GỒM",
    note: "Giá và gói chỉ mang tính minh họa cho ý tưởng sản phẩm. Bản demo này không có thanh toán hay đăng ký gói.",
  },
  faq: {
    eyebrow: "Điều cần biết", title1: "Một vài câu hỏi", title2: "thường gặp.", description: "Tìm hiểu thêm về ý tưởng này. Nếu còn tò mò, hãy thử bản xem trước tương tác ở trên.",
    link: "Khám phá bản demo →",
    items: [
      { question: "StudyFlow AI là gì?", answer: "StudyFlow AI là ý tưởng về không gian học tập kết hợp giải thích dễ hiểu, tóm tắt ghi chú, bài kiểm tra và kế hoạch học cá nhân. Trang web này là bản demo giao diện tương tác." },
      { question: "StudyFlow có miễn phí không?", answer: "Ý tưởng sản phẩm có gói miễn phí. Giá và gói hiển thị ở đây chỉ mang tính minh họa; bản demo không tạo tài khoản hay xử lý thanh toán." },
      { question: "StudyFlow có thể tóm tắt ghi chú của tôi không?", answer: "Tóm tắt ghi chú là một tính năng dự kiến. Trong bản demo giao diện này, câu trả lời mẫu cho thấy trải nghiệm có thể như thế nào, nhưng không có tài liệu nào được xử lý." },
      { question: "Tôi có thể tạo bài kiểm tra từ tài liệu học không?", answer: "Đó là một ý tưởng cốt lõi của StudyFlow. Hãy thử gợi ý tạo bài kiểm tra trong phần xem trước tương tác để xem một ví dụ chạy ngay trên trình duyệt." },
      { question: "StudyFlow có thay thế giáo viên không?", answer: "Không. StudyFlow được thiết kế như người bạn đồng hành giúp bạn làm rõ kiến thức, luyện tập và sắp xếp việc học bên cạnh giáo viên, khóa học và tài liệu đáng tin cậy." },
      { question: "Tài liệu học của tôi có được lưu lại không?", answer: "Bản demo này không tải lên, lưu hay gửi câu hỏi hoặc tệp của bạn đến máy chủ. Các câu trả lời được tạo từ nội dung mẫu có sẵn trong trình duyệt." },
    ],
  },
  final: { eyebrow: "CHƯƠNG MỚI BẮT ĐẦU TỪ ĐÂY", title1: "Sẵn sàng học", title2: "thông suốt hơn?", description: "Hãy mang đến câu hỏi. Chúng tôi giúp bạn tìm bước tiếp theo.", cta: "Bắt đầu học miễn phí" },
  footer: {
    description: "Học rõ hơn qua từng câu hỏi.", disclaimer: "Dự án ý tưởng giao diện độc lập.",
    groups: [
      { title: "Sản phẩm", links: ["Tính năng", "Trợ lý AI", "Kế hoạch học", "Bảng giá"] },
      { title: "Tài nguyên", links: ["Blog (demo)", "Hướng dẫn học (demo)", "Trung tâm trợ giúp (demo)"] },
      { title: "Công ty", links: ["Giới thiệu", "Liên hệ (demo)", "Tuyển dụng (demo)"] },
      { title: "Pháp lý", links: ["Quyền riêng tư (demo)", "Điều khoản (demo)"] },
    ],
    copyright: "© 2026 StudyFlow AI. Dự án demo.", top: "Về đầu trang", brandAria: "StudyFlow AI, về đầu trang",
  },
};

export type SiteCopy = typeof en;
export const translations: Record<Locale, SiteCopy> = { en, vi };
