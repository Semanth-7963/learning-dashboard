import { SettingsContent } from "@/components/pages/SettingsContent";

export default function SettingsPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your profile and preferences
        </p>
      </div>
      <SettingsContent />
    </section>
  );
}
