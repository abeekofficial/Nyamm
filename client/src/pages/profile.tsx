import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/supabase-client";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { profile, loading } = useProfile();
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [saving, setSaving] = useState(false);

  if (loading) return <p>Loading profile...</p>;
  if (!profile) return <p>No profile found</p>;

  const handleUpdate = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", profile.id);

    setSaving(false);

    if (error) toast.error(error.message);
    else toast.success("Profile updated!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
      />
      <Button onClick={handleUpdate} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
};

export default Profile;
