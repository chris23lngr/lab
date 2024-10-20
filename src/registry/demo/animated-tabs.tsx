"use client";

import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/components/animated-tabs";

export default function AnimatedTabsDemo() {
  return (
    <div className="flex h-full min-h-64 w-full items-center justify-center">
      <Tabs defaultValue="dashboard" orientation="horizontal">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
