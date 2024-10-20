import * as Notifications from "./notifcations";

export default function Page() {
  return (
    <main>
      <section>
        <div className="container py-32">
          <p>This is content</p>
          <Notifications.Root></Notifications.Root>
        </div>
      </section>
    </main>
  );
}
