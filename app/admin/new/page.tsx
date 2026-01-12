import { PropertyForm } from "@/components/admin/property-form";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

export default function NewPropertyPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Add New Property</h1>
        <PropertyForm />
      </div>
    </div>
  );
}
