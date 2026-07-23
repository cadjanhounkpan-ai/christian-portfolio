import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary-600">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold text-ink-800">
        Page introuvable · Page not found
      </h1>
      <p className="max-w-md text-slate-600">
        La page que vous cherchez n'existe pas ou a été déplacée. — The page you're
        looking for doesn't exist or has been moved.
      </p>
      <Button href="/fr" className="mt-2">
        Retour à l'accueil
      </Button>
    </Container>
  );
}
