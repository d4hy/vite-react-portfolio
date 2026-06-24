import {
  AudioLines,
  Brain,
  BriefcaseBusiness,
  Chrome,
  Cloud,
  Download,
  ExternalLink,
  Mic,
  MessageSquareText,
  PackageCheck,
  Paperclip,
  RotateCcw,
  Search,
  SendHorizontal,
  Sparkles,
  User,
  Waypoints,
} from "lucide-react";
import { useState } from "react";
import { projectsList } from "../pages/Projects";
import { ProjectGallery } from "./ProjectGallery";

const assistantLogos = {
  chatgpt: "/images/hawl-techs-memory-box-images/ai-logos/chatgpt.svg",
  claude: "/images/hawl-techs-memory-box-images/ai-logos/claude.svg",
  gemini: "/images/hawl-techs-memory-box-images/ai-logos/gemini.svg",
};

const demoCopy = {
  firstPrompt: "I'm building an AI habit tracker for students and need help planning the MVP",
  secondPrompt: "Continue helping me with the habit tracker app",
  memorySnippet:
    "AI habit tracker for students, helping them stay consistent with goals and routines. MVP is headed toward Next.js and Supabase.",
  assistantReply:
    "I would start by helping students stay consistent with goals and routines. Your Next.js and Supabase MVP can prove that loop first.",
  priorPrompt:
    "My API works in Postman but fails in the browser with a CORS error. What should I check first?",
  priorReply:
    "CORS is enforced by the browser, not Postman. Confirm the response includes Access-Control-Allow-Origin for your exact origin and that preflight OPTIONS returns the right headers.",
};

const workflowSteps = [
  {
    icon: Download,
    title: "Install",
    description: "Add the Chrome extension and sign in once.",
  },
  {
    icon: MessageSquareText,
    title: "Chat",
    description: "Use ChatGPT, Claude, Gemini, and other AI tools normally.",
  },
  {
    icon: Cloud,
    title: "Capture",
    description: "Memory Box saves useful conversation context automatically.",
  },
  {
    icon: Search,
    title: "Recall",
    description: "Search, sync, and reuse memories across future AI sessions.",
  },
];

const galleryItems = [
  {
    step: "01",
    title: "Capture and Manage Memories",
    description: "The core product workflow: conversations become saved memory cards users can search, organize, sync, and reuse later.",
    image: "/images/hawl-techs-memory-box-images/memory-box-ui.png",
    alt: "Memory Box product UI artwork",
    featured: true,
    contain: true,
  },
  {
    step: "02",
    title: "Start With the Extension",
    description: "Users install the browser extension, then Memory Box starts acting as a shared memory layer for AI chats.",
    image: "/images/hawl-techs-memory-box-images/memory-box-live-home.png",
    alt: "AI Memory Box homepage hero section",
    contain: true,
  },
  {
    step: "03",
    title: "Recall Context Across AI Tools",
    description: "Universal memory, seamless sync, and semantic recall make prior context available beyond one chat or one assistant.",
    image: "/images/hawl-techs-memory-box-images/memory-box-live-home-features.png",
    alt: "AI Memory Box universal memory feature cards",
    contain: true,
  },
  {
    step: "04",
    title: "Improve Prompts Inline",
    description: "The prompt optimizer gives users an in-chat control for improving requests before they send them.",
    image: "/images/hawl-techs-memory-box-images/optimize-prompt.png",
    alt: "Memory Box prompt optimization control",
    contain: true,
  },
  {
    step: "05",
    title: "Memory Galaxy",
    description: "A visual layer for exploring conversation history as clusters, paths, and relationships instead of flat lists.",
    image: "/images/hawl-techs-memory-box-images/memory-box-live-galaxy.png",
    alt: "Memory Galaxy product page",
    contain: true,
  },
  {
    step: "06",
    title: "Scale With Premium Features",
    description: "The product scope includes memory limits, semantic search, data firewall support, prompt optimization, and platform coverage.",
    image: "/images/hawl-techs-memory-box-images/memory-box-live-pricing.png",
    alt: "AI Memory Box pricing page",
    contain: true,
  },
];

const panelBaseClass =
  "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7";

const DemoComposer = ({
  composerText,
  showInjectedMemory,
  onSend,
  sendDisabled,
  sendLabel,
  isHero = false,
}) => (
  <div
    className={`flex min-h-0 w-full flex-col bg-slate-100 shadow-inner ${
      isHero
        ? "min-h-32 rounded-[2rem] px-4 pb-3 pt-4 sm:min-h-36 sm:rounded-[2.25rem] sm:px-5 sm:pb-4 sm:pt-5 md:min-h-40 md:px-6"
        : "rounded-[1.75rem] p-4"
    }`}
  >
    {showInjectedMemory && (
      <div className="mb-4 border-b border-slate-300/70 pb-4">
        <p className="mb-2 text-[10px] font-semibold uppercase text-slate-500">
          Recalled from Memory Box
        </p>
        <div className="mb-2 flex items-center gap-2">
          <img src={assistantLogos.chatgpt} alt="" className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold text-slate-800">ChatGPT</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">{demoCopy.memorySnippet}</p>
      </div>
    )}

    <p className={`min-h-14 flex-1 whitespace-pre-wrap px-2 leading-relaxed text-slate-900 ${isHero ? "text-base sm:text-lg" : "text-sm"}`}>
      {composerText}
      {!sendDisabled && <span className="ml-px inline-block h-4 w-px animate-pulse align-middle bg-slate-900" />}
    </p>

    <div className="mt-4 flex items-center justify-between gap-3 px-1 text-slate-500">
      <div className="flex gap-4">
        <Paperclip size={isHero ? 20 : 17} />
        <Mic size={isHero ? 20 : 17} />
      </div>
      <div className="flex items-center gap-2.5">
        <span className={`flex items-center justify-center rounded-full bg-slate-950 text-white ${isHero ? "h-12 w-12" : "h-10 w-10"}`} aria-hidden="true">
          <AudioLines size={isHero ? 20 : 16} />
        </span>
        <button
          type="button"
          onClick={onSend}
          disabled={sendDisabled}
          aria-label={sendLabel}
          className={`flex items-center justify-center rounded-full border transition ${
            isHero ? "h-12 w-12" : "h-10 w-10"
          } ${
            sendDisabled
              ? "border-slate-200 bg-slate-200 text-slate-400"
              : "border-primary bg-primary text-white shadow-md hover:opacity-90"
          }`}
        >
          <SendHorizontal size={isHero ? 20 : 16} />
        </button>
      </div>
    </div>
  </div>
);

const MemoryCard = ({ isNew = false, dateLabel, prompt, model = "chatgpt", modelName = "ChatGPT", reply }) => (
  <li>
    <p className="mb-2 pl-1 text-[11px] font-semibold text-slate-500">{dateLabel}</p>
    <article className={`rounded-2xl border bg-white px-4 py-3.5 shadow-sm ${isNew ? "border-primary/30 shadow-md" : "border-slate-200"}`}>
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
          <User size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">User</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{prompt}</p>
        </div>
      </div>

      <div className="my-3 h-px bg-slate-200" />

      <div className="flex items-start gap-3">
        <img src={assistantLogos[model]} alt="" className="h-8 w-8 shrink-0" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">{modelName}</p>
          <p className="mt-1 line-clamp-4 text-sm leading-relaxed text-slate-600">{reply}</p>
        </div>
      </div>
    </article>
  </li>
);

const ChatDemoPanel = ({ phase, onSend }) => {
  const isIntro = phase === "firstReady";
  const showInjectedMemory = phase === "complete";
  const showThread = phase === "threadReveal";
  const isDone = phase === "threadReveal";
  const surfaceLogo = isIntro ? assistantLogos.chatgpt : assistantLogos.claude;
  const surfaceLabel = isIntro ? "ChatGPT" : "Claude";
  const composerText = isIntro ? demoCopy.firstPrompt : phase === "threadReveal" ? "" : demoCopy.secondPrompt;

  return (
    <div className={`${panelBaseClass} flex w-full flex-col ${isIntro ? "mx-auto min-h-80 max-w-2xl" : "min-h-[420px] sm:min-h-[460px]"}`}>
      <div className="mb-5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
        <img src={surfaceLogo} alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
        <span className="text-sm font-semibold text-slate-900">{surfaceLabel}</span>
      </div>

      {showThread && (
        <div className="mb-4 flex flex-1 flex-col gap-3 overflow-hidden">
          <div className="ml-auto max-w-[90%] rounded-[1.35rem] bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-900">
            {demoCopy.secondPrompt}
          </div>
          <div className="max-w-[92%] rounded-[1.35rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm">
            {demoCopy.assistantReply}
          </div>
        </div>
      )}

      {!showThread && (
        <div className={isIntro ? "flex flex-1 items-center" : "mt-auto"}>
          {showInjectedMemory && (
            <div className="mb-3 flex justify-end">
              <span className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                Relevant memory found
              </span>
            </div>
          )}
          <DemoComposer
            composerText={composerText}
            showInjectedMemory={showInjectedMemory}
            onSend={onSend}
            sendDisabled={isDone}
            sendLabel={isIntro ? "Send first prompt" : showInjectedMemory ? "Reveal recalled response" : "Send follow-up prompt"}
            isHero={isIntro}
          />
        </div>
      )}
    </div>
  );
};

const MemoryBoxDemoPanel = ({ showNewMemory }) => (
  <div className={`${panelBaseClass} flex min-h-[420px] w-full flex-col sm:min-h-[460px]`}>
    <header className="mb-6 flex items-center gap-3">
      <img
        src="/images/hawl-techs-memory-box-images/memoryboxlogo.png"
        alt=""
        className="h-7 w-7 rounded-lg object-contain"
        aria-hidden="true"
      />
      <h4 className="text-xl font-semibold text-slate-900">Memory Box</h4>
    </header>

    <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100/80 p-4">
      <ul className="flex flex-col gap-5">
        {showNewMemory && (
          <MemoryCard
            isNew
            dateLabel="Just now"
            prompt={demoCopy.firstPrompt}
            reply="Working on an AI-powered habit tracker that helps students stay consistent with goals and routines. Planning to build the MVP with Next.js and Supabase."
          />
        )}
        <MemoryCard
          dateLabel="4/7/26, 12:41 PM"
          prompt={demoCopy.priorPrompt}
          model="gemini"
          modelName="Gemini"
          reply={demoCopy.priorReply}
        />
      </ul>
    </div>
  </div>
);

export const HawlTechsMemoryBox = () => {
  const project = projectsList.find((p) => p.id === 4);
  const [demoPhase, setDemoPhase] = useState("firstReady");
  const showMemoryPanel = demoPhase !== "firstReady";

  const handleDemoSend = () => {
    if (demoPhase === "firstReady") {
      setDemoPhase("secondReady");
      return;
    }

    if (demoPhase === "secondReady") {
      setDemoPhase("complete");
      return;
    }

    if (demoPhase === "complete") {
      setDemoPhase("threadReveal");
    }
  };

  const replayDemo = () => setDemoPhase("firstReady");

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border relative text-left">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img
        src="/images/hawl-techs-memory-box-images/memory-box-ui.png"
        alt={project.title}
        className="w-full h-full object-cover rounded-md mb-4"
      />

      <p className="text-foreground mb-4 indent-5">
        During my internship with Hawl Technologies, I worked on AI Memory Box, a Chrome extension and web platform that captures, organizes, and displays user memory data from LLM conversations. The product acts as a centralized memory layer across tools like ChatGPT, Claude, Gemini, Perplexity, Poe, Grok, Copilot, DeepSeek, Qwen, and Zhipu.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <BriefcaseBusiness size={18} />
            Role
          </span>
          <p className="inline"> Software engineering intern and product contributor </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <PackageCheck size={18} />
            Stack
          </span>
          <p className="inline"> React, JavaScript, Manifest V3, Vite, Tailwind CSS, REST APIs, Chrome extension APIs, Next.js </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Sparkles size={18} />
            Focus
          </span>
          <p className="inline"> Extension UI architecture, scraping controls, memory views, connected apps, onboarding, and cross-platform recall </p>
        </li>

        <li className="flex flex-wrap gap-3">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Live Website
            <ExternalLink size={18} />
          </a>

          <a href="https://chromewebstore.google.com/detail/memory-box/mhhggbpblanfafcmehaaeimdkneoakip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Chrome Extension
            <Chrome size={18} />
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center my-4">What I Worked On</h3>
      <p className="text-foreground mb-4 indent-5">
        I built pause and resume scraping controls, memory statistics views, search and filter UI, connected app integration screens, toast notifications, and signed-out call-to-action cues for the extension experience.
      </p>

      <p className="text-foreground mb-4 indent-5">
        I also implemented onboarding and app tour refinements, including animations and UI guidance for resizing and navigation. Across the extension and website, I contributed approximately 24 React component files using React, JavaScript, Manifest V3, Vite, Tailwind CSS, and REST API integrations.
      </p>

      <p className="text-foreground mb-4 indent-5">
        I fixed extension usability and behavior bugs, including unreadable UI states, incorrect memory cap tier messaging, and duplicate tab opening behavior. I also helped refactor the Chrome extension frontend from plain JavaScript into a React-based architecture so new UI features were easier to implement and maintain.
      </p>

      <h3 className="text-xl font-bold text-center my-4">Product Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="border border-border rounded-lg p-4">
          <Brain className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Automatic Capture</h4>
          <p className="text-sm text-foreground">Captures useful memories while users chat so they do not need to copy context into notes manually.</p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <Waypoints className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Cross-Tool Sync</h4>
          <p className="text-sm text-foreground">Brings context across different AI assistants so users can continue work without re-explaining.</p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <Sparkles className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Smarter Responses</h4>
          <p className="text-sm text-foreground">Uses saved context to surface relevant memories and improve later responses.</p>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-bold text-center mb-2">Gallery</h3>
        <p className="text-center text-sm text-foreground mb-6 max-w-2xl mx-auto">
          A quick walkthrough of how Memory Box works: install the extension, chat normally, capture useful context, then recall it later across AI tools.
        </p>

        <div className="mb-6 overflow-hidden rounded-lg border border-border bg-white text-slate-950 shadow-sm">
          <div
            className="px-4 py-10 sm:px-8 lg:px-12"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(15, 23, 42, 0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          >
            <p className="text-center text-xs font-semibold uppercase text-slate-500">Memory Box</p>
            <h4 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold leading-tight sm:text-4xl">
              A centralized memory layer across all different AI platforms
            </h4>

            <div className="mt-14 w-full sm:mt-16">
              {demoPhase === "threadReveal" && (
                <div className="mb-8 flex justify-center">
                  <button
                    type="button"
                    onClick={replayDemo}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <RotateCcw size={16} />
                    Replay demo
                  </button>
                </div>
              )}

              <div
                className={`flex w-full flex-col gap-4 md:gap-5 ${
                  showMemoryPanel ? "md:grid md:grid-cols-2 md:items-stretch" : "items-center"
                }`}
              >
                <ChatDemoPanel phase={demoPhase} onSend={handleDemoSend} />
                {showMemoryPanel && <MemoryBoxDemoPanel showNewMemory={showMemoryPanel} />}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {workflowSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="rounded-lg border border-border bg-background p-4">
                <Icon className="mb-3 text-primary" size={22} />
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-foreground mt-1">{step.description}</p>
              </div>
            );
          })}
        </div>

        <ProjectGallery
          items={galleryItems}
          getImageFrameClassName={(item) => (item.featured ? "h-80 md:h-[30rem]" : "h-72")}
          getImageClassName={(item) =>
            `h-full w-full p-3 transition duration-300 group-hover:scale-[1.03] ${
              item.contain ? "object-contain" : "object-cover"
            }`
          }
          renderEyebrow={(item) => (
            <p className="text-xs font-semibold uppercase text-primary mb-1">
              Step {item.step}
            </p>
          )}
        />
      </section>
    </div>
  );
};
