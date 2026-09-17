import { BarChart3, BookOpenText, CalendarDays, Check, ChevronDown, CircleHelp, LayoutDashboard, ListChecks, Plus, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const navigation = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Sparkles, label: "AI Tutor" },
  { icon: BookOpenText, label: "My Courses" },
  { icon: CalendarDays, label: "Study Plans" },
  { icon: ListChecks, label: "Quizzes" },
  { icon: BarChart3, label: "Progress" },
];

const days = [
  { day: "Mon", height: 55 },
  { day: "Tue", height: 78 },
  { day: "Wed", height: 45 },
  { day: "Thu", height: 95 },
  { day: "Fri", height: 68 },
  { day: "Sat", height: 37 },
  { day: "Sun", height: 59 },
];

export function DashboardPreview() {
  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="container">
        <Reveal className="dashboard-heading">
          <SectionHeading eyebrow="The bigger picture" title={<>Your whole study week, <em>in focus.</em></>} description="Answers are just the start. Keep your courses, daily plan, and progress together in a space that makes the next step obvious." centered />
        </Reveal>
        <Reveal className="dashboard-shell" delay={0.12}>
          <div className="dashboard-side">
            <div className="dashboard-logo"><span><Sparkles size={16} /></span><strong>studyflow<span>.ai</span></strong></div>
            <div className="dashboard-nav-label">WORKSPACE</div>
            <div className="dashboard-nav">
              {navigation.map((item) => {
                const Icon = item.icon;
                return <div className={"dashboard-nav-item" + (item.active ? " active" : "")} key={item.label}><Icon size={16} /><span>{item.label}</span></div>;
              })}
            </div>
            <div className="dashboard-side-bottom"><span><CircleHelp size={15} /> Help & support</span><div><span className="dash-avatar">MC</span><span>Maya Chen<small>Student plan</small></span><ChevronDown size={13} /></div></div>
          </div>
          <div className="dashboard-main">
            <div className="dashboard-topline"><span>Overview <span>/ Dashboard</span></span><span className="dashboard-date">✦ Your learning space</span></div>
            <div className="dashboard-greeting"><div><small>WEDNESDAY, APRIL 16</small><h3>Good morning, Maya <span>👋</span></h3><p>You&apos;re making progress. Let&apos;s keep it going.</p></div><span className="dash-new-plan"><Plus size={15} /> New study plan</span></div>
            <div className="dashboard-content-grid">
              <div className="dash-card courses-card">
                <div className="dash-card-head"><h4>Continue learning</h4><span>View all →</span></div>
                <div className="course-item"><span className="course-badge purple"><BookOpenText size={17} /></span><div><strong>React Fundamentals</strong><small>12 of 16 lessons complete</small><div className="progress-track"><i style={{ width: "78%" }} /></div></div><b>78%</b></div>
                <div className="course-item"><span className="course-badge peach"><BookOpenText size={17} /></span><div><strong>Data Structures</strong><small>6 of 11 lessons complete</small><div className="progress-track"><i style={{ width: "55%" }} /></div></div><b>55%</b></div>
              </div>
              <div className="dash-card plan-card">
                <div className="dash-card-head"><h4>Today&apos;s plan</h4><span>3 tasks</span></div>
                <div className="task done"><span><Check size={12} /></span><p>Review React Hooks</p></div>
                <div className="task"><span /><p>Complete JavaScript quiz</p></div>
                <div className="task"><span /><p>Data Structures <small>· 30 min</small></p></div>
                <div className="plan-progress"><span>1 of 3 completed</span><strong>33%</strong></div>
                <div className="progress-track"><i style={{ width: "33%" }} /></div>
              </div>
              <div className="dash-card chart-card">
                <div className="dash-card-head"><h4>Weekly study time</h4><span>This week <ChevronDown size={11} /></span></div>
                <div className="chart-top"><strong>8h 45m</strong><span>↗ 12% from last week</span></div>
                <div className="bar-chart" aria-label="Sample weekly study time chart">
                  {days.map((day) => <div key={day.day}><span className="bar-track"><i style={{ height: day.height + "%" }} /></span><small>{day.day}</small></div>)}
                </div>
              </div>
              <div className="dash-card insight-card"><span className="insight-icon"><Sparkles size={19} /></span><span>STUDYFLOW INSIGHT</span><h4>Nice work this week!</h4><p>You&apos;ve practiced consistently for three days. A quick quiz today can help it stick.</p><span className="insight-link">Keep the streak going →</span></div>
            </div>
          </div>
        </Reveal>
        <p className="dashboard-caption">Product preview · sample data shown for illustration</p>
      </div>
    </section>
  );
}
