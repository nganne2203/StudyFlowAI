import { BarChart3, BookOpenText, CalendarDays, Check, ChevronDown, CircleHelp, LayoutDashboard, ListChecks, Plus, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

const navigation = [
  { icon: LayoutDashboard, active: true },
  { icon: Sparkles },
  { icon: BookOpenText },
  { icon: CalendarDays },
  { icon: ListChecks },
  { icon: BarChart3 },
];

const dayHeights = [55, 78, 45, 95, 68, 37, 59];

export function DashboardPreview({ copy }: { copy: SiteCopy["dashboard"] }) {
  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="container">
        <Reveal className="dashboard-heading">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} centered />
        </Reveal>
        <Reveal className="dashboard-shell" delay={0.12}>
          <div className="dashboard-side">
            <div className="dashboard-logo"><span><Sparkles size={16} /></span><strong>studyflow<span>.ai</span></strong></div>
            <div className="dashboard-nav-label">{copy.workspace}</div>
            <div className="dashboard-nav">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return <div className={"dashboard-nav-item" + (item.active ? " active" : "")} key={index}><Icon size={16} /><span>{copy.navigation[index]}</span></div>;
              })}
            </div>
            <div className="dashboard-side-bottom"><span><CircleHelp size={15} /> {copy.help}</span><div><span className="dash-avatar">MC</span><span>Maya Chen<small>{copy.plan}</small></span><ChevronDown size={13} /></div></div>
          </div>
          <div className="dashboard-main">
            <div className="dashboard-topline"><span>{copy.navigation[0]} <span>/ {copy.dashboard}</span></span><span className="dashboard-date">{copy.learningSpace}</span></div>
            <div className="dashboard-greeting"><div><small>{copy.date}</small><h3>{copy.greeting} <span>👋</span></h3><p>{copy.encouragement}</p></div><span className="dash-new-plan"><Plus size={15} /> {copy.newPlan}</span></div>
            <div className="dashboard-content-grid">
              <div className="dash-card courses-card">
                <div className="dash-card-head"><h4>{copy.continue}</h4><span>{copy.viewAll}</span></div>
                <div className="course-item"><span className="course-badge purple"><BookOpenText size={17} /></span><div><strong>{copy.courses[0]}</strong><small>{copy.lessons[0]}</small><div className="progress-track"><i style={{ width: "78%" }} /></div></div><b>78%</b></div>
                <div className="course-item"><span className="course-badge peach"><BookOpenText size={17} /></span><div><strong>{copy.courses[1]}</strong><small>{copy.lessons[1]}</small><div className="progress-track"><i style={{ width: "55%" }} /></div></div><b>55%</b></div>
              </div>
              <div className="dash-card plan-card">
                <div className="dash-card-head"><h4>{copy.today}</h4><span>{copy.taskCount}</span></div>
                <div className="task done"><span><Check size={12} /></span><p>{copy.tasks[0]}</p></div>
                <div className="task"><span /><p>{copy.tasks[1]}</p></div>
                <div className="task"><span /><p>{copy.tasks[2]} <small>{copy.minutes}</small></p></div>
                <div className="plan-progress"><span>{copy.completed}</span><strong>33%</strong></div>
                <div className="progress-track"><i style={{ width: "33%" }} /></div>
              </div>
              <div className="dash-card chart-card">
                <div className="dash-card-head"><h4>{copy.weekly}</h4><span>{copy.thisWeek} <ChevronDown size={11} /></span></div>
                <div className="chart-top"><strong>{copy.time}</strong><span>{copy.change}</span></div>
                <div className="bar-chart" aria-label={copy.chartAria}>
                  {copy.days.map((day, index) => <div key={day}><span className="bar-track"><i style={{ height: dayHeights[index] + "%" }} /></span><small>{day}</small></div>)}
                </div>
              </div>
              <div className="dash-card insight-card"><span className="insight-icon"><Sparkles size={19} /></span><span>{copy.insight}</span><h4>{copy.insightTitle}</h4><p>{copy.insightText}</p><span className="insight-link">{copy.insightLink}</span></div>
            </div>
          </div>
        </Reveal>
        <p className="dashboard-caption">{copy.caption}</p>
      </div>
    </section>
  );
}
