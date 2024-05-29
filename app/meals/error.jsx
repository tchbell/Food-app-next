'use client';
export default function MealsErrorPage({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetched meal data.</p>
    </main>
  );
}
