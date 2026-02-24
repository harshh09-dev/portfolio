import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import { Command, Globe, Code, BookOpen, Layout, Disc, PenTool, CheckSquare, Calendar, Lock, Layers, Camera, Ruler, ListTodo } from "lucide-react";

const software = [
  { id: "01", name: "Raycast", type: "PRODUCTIVITY", desc: "Launcher & Extensions", icon: Command },
  { id: "02", name: "Arc", type: "BROWSER", desc: "The Internet Computer", icon: Globe },
  { id: "03", name: "VS Code", type: "EDITOR", desc: "Primary IDE", icon: Code },
  { id: "04", name: "Obsidian", type: "NOTES", desc: "Second Brain", icon: BookOpen },
  { id: "05", name: "Notion", type: "WORKSPACE", desc: "Team Knowledge Base", icon: Layout },
  { id: "06", name: "mymind", type: "INSPIRATION", desc: "Visual Storage", icon: Disc },
  { id: "07", name: "Tana", type: "DATABASE", desc: "Ontology Graph", icon: Layers },
  { id: "08", name: "Spotify", type: "MUSIC", desc: "Audio Streaming", icon: Disc },
  { id: "09", name: "Figma", type: "DESIGN", desc: "Interface Design", icon: PenTool },
  { id: "10", name: "Things 3", type: "TASKS", desc: "Task Management", icon: CheckSquare },
  { id: "11", name: "Fantastical", type: "CALENDAR", desc: "Time Management", icon: Calendar },
  { id: "12", name: "1Password", type: "SECURITY", desc: "Secrets Manager", icon: Lock },
  { id: "13", name: "Framer", type: "WEB BUILDER", desc: "No-Code Sites", icon: Layers },
  { id: "14", name: "Cleanshot X", type: "UTILITY", desc: "Screen Capture", icon: Camera },
  { id: "15", name: "PixelSnap", type: "UTILITY", desc: "Screen Measurement", icon: Ruler },
  { id: "16", name: "Linear", type: "ISSUES", desc: "Project Tracking", icon: ListTodo },
];

const hardware = [
  { id: "H1", name: "MSI GF65 Thin", type: "WORKSTATION", desc: "Intel i7, RTX 3060" },
  { id: "H2", name: "LG Ultrafine", type: "DISPLAY", desc: "5K External Monitor" },
  { id: "H3", name: "Red Gear 673", type: "INPUT", desc: "Mechanical Keyboard" },
  { id: "H4", name: "MX Master 3S", type: "INPUT", desc: "Ergonomic Mouse" },
  { id: "H5", name: "iPhone 17 Pro", type: "MOBILE", desc: "Primary Device" },
  { id: "H6", name: "iPad 11th Gen", type: "TABLET", desc: "Secondary Display" },
  { id: "H7", name: "AirPods Pro 2", type: "AUDIO", desc: "Noise Cancellation" },
];

const Uses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-xs text-primary">// SYSTEM_CONFIGURATION_V.25</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">USER: PARTH_SHARMA</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <h1 className="text-6xl font-black uppercase tracking-tight text-foreground md:text-8xl">USES</h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            A curated manifest of hardware, software, and everyday carry.
          </p>
        </motion.div>

        {/* Software Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-xs text-primary">01 / SOFTWARE_INVENTORY</p>
            <p className="font-mono text-xs text-muted-foreground">Status: Active</p>
          </div>

          {/* Table Header */}
          <div className="mt-4 hidden grid-cols-[60px_1fr_1fr_1fr] gap-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:grid">
            <span>ID</span>
            <span>NAME</span>
            <span>TYPE</span>
            <span className="text-right">DESCRIPTION</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border/50">
            {software.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-[60px_1fr] gap-4 py-4 md:grid-cols-[60px_1fr_1fr_1fr]"
              >
                <span className="text-sm text-muted-foreground">{item.id}</span>
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card">
                    <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{item.name}</span>
                </div>
                <span className="hidden font-mono text-xs uppercase text-muted-foreground md:block">{item.type}</span>
                <span className="hidden font-mono text-xs text-muted-foreground md:block md:text-right">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hardware Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-xs text-primary">02 / HARDWARE_INVENTORY</p>
            <p className="font-mono text-xs text-muted-foreground">Status: Deployed</p>
          </div>

          <div className="divide-y divide-border/50">
            {hardware.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-[60px_1fr] gap-4 py-4 md:grid-cols-[60px_1fr_1fr_1fr]"
              >
                <span className="text-sm text-muted-foreground">{item.id}</span>
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="hidden font-mono text-xs uppercase text-muted-foreground md:block">{item.type}</span>
                <span className="hidden font-mono text-xs text-muted-foreground md:block md:text-right">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <BehindCurtainsSection />
      <Footer />
    </div>
  );
};

export default Uses;
