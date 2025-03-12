import { SyntheticEvent, useCallback, useState } from "react";
import { supaClient } from "../../config/superbase";

export default function StatusUpdater() {
  const [status, setStatus] = useState("");

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      const supabase = supaClient;
      try {
        const response = await supabase
          .from("orders")
          .update({ status, rider_name: "Johnny" })
          .eq("id", 1);
        console.log({ response, status });
      } catch (error) {}
    },
    [status, supaClient]
  );
  // pending, accepted, assigned, delivering, on_hold, completed, cancelled, at_pick_up, picked_up, on_pick_up_route, delivered
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-10 items-center justify-center w-full h-screen"
    >
      <div className=" flex flex-col gap-1">
        <label htmlFor="status-changer">Status changer</label>
        <select
          id="status-changer"
          className=" p-2 border rounded-lg"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {[
            "pending",
            "accepted",
            "assigned",
            "delivering",
            "on_hold",
            "completed",
            "cancelled",
            "at_pick_up",
            "picked_up",
            "on_pick_up_route",
            "delivered",
          ].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button
        className=" p-3 px-10 rounded-md bg-primary text-white hover:bg-gray-700 transition-all"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
