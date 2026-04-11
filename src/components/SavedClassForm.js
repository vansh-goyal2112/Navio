"use client";

import { useEffect, useState } from "react";
import { getBuildings } from "../services/navio-service";

export default function SavedClassForm({ onAddClass }) {
  const initialState = {
    building: "",
    roomNumber: "",
    day: "",
    time: "",
  };

  const [classItem, setClassItem] = useState(initialState);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    async function loadBuildings() {
      const data = await getBuildings();
      setBuildings(data);

      if (data.length > 0) {
        setClassItem((prev) => ({
          ...prev,
          building: data[0].name,
        }));
      }
    }

    loadBuildings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClass = {
      ...classItem,
      roomNumber: classItem.roomNumber.trim().toUpperCase(),
    };

    onAddClass(newClass);
    setClassItem((prev) => ({
      ...initialState,
      building: prev.building || "",
    }));
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-8"
      >
        <div>
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
            SAVE CLASS
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Save New Class
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#475569] dark:text-slate-300">
            Add a classroom destination to your semester list so you can quickly
            return to it later through the Navio flow.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="building"
              className="block text-sm font-semibold text-[#0F172A] dark:text-white"
            >
              Building
            </label>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
              <select
                id="building"
                name="building"
                value={classItem.building}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none dark:text-white"
              >
                {buildings.map((building) => (
                  <option key={building.id} value={building.name}>
                    {building.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="roomNumber"
              className="block text-sm font-semibold text-[#0F172A] dark:text-white"
            >
              Room Number
            </label>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
              <input
                id="roomNumber"
                name="roomNumber"
                type="text"
                value={classItem.roomNumber}
                onChange={handleChange}
                required
                placeholder="MB 202"
                className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="day"
                className="block text-sm font-semibold text-[#0F172A] dark:text-white"
              >
                Day
              </label>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
                <input
                  id="day"
                  name="day"
                  type="text"
                  value={classItem.day}
                  onChange={handleChange}
                  required
                  placeholder="Monday"
                  className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="time"
                className="block text-sm font-semibold text-[#0F172A] dark:text-white"
              >
                Time
              </label>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#E11D48] focus-within:shadow-[0_0_0_4px_rgba(225,29,72,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
                <input
                  id="time"
                  name="time"
                  type="text"
                  value={classItem.time}
                  onChange={handleChange}
                  required
                  placeholder="10:00 AM - 11:20 AM"
                  className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
          >
            Save Class
          </button>

          <div className="w-full rounded-2xl border border-red-100 bg-red-50/70 px-4 py-3 text-sm text-[#475569] dark:border-red-400/20 dark:bg-red-500/10 dark:text-slate-300">
            Room values will be stored in uppercase for consistency.
          </div>
        </div>
      </form>
    </div>
  );
}