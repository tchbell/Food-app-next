export default function MealsErrorPage({ error }) {
  return (
    <main className="error">
      <h1>Meal Not Found</h1>
      <p>Failed to fetched meal data.</p>
    </main>
  );
}
