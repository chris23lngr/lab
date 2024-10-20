import { Tabs, TabsIndicator, TabsList, TabsTrigger } from "./tabs";

export default function Page() {
  return (
    <section>
      <div className="container py-64">
        <Tabs defaultValue="dashboard" orientation="horizontal">
          <TabsList>
            <TabsIndicator />
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
