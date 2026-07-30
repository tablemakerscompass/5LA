import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";

/**
 * Shared, presentational form primitives built on the global form styles in
 * globals.css. These are the reusable building blocks for future forms — the
 * final contact form is intentionally not built in this phase.
 */

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function Field({ label, htmlFor, required, hint, error, children }: FieldProps) {
  return (
    <div className="field">
      <label className="field-label" htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="field-required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && <span className="field-hint">{hint}</span>}
      {children}
      {error && (
        <span id={`${htmlFor}-error`} className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="input" {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="textarea" {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className="select" {...props} />;
}

type ChoiceProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type: "checkbox" | "radio";
};

export function Choice({ label, type, ...rest }: ChoiceProps) {
  return (
    <label className="choice">
      <input type={type} {...rest} />
      <span>{label}</span>
    </label>
  );
}

type FileUploadProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function FileUpload({
  label = "Upload a file",
  id = "file-upload",
  ...rest
}: FileUploadProps) {
  return (
    <label className="file-upload" htmlFor={id}>
      <span aria-hidden="true">↥</span>
      <span>{label}</span>
      <input id={id} type="file" className="visually-hidden" {...rest} />
    </label>
  );
}

export function FormMessage({
  variant,
  children,
}: {
  variant: "error" | "success";
  children: ReactNode;
}) {
  return (
    <p
      className={`form-message ${variant === "error" ? "is-error" : "is-success"}`}
      role={variant === "error" ? "alert" : "status"}
    >
      {children}
    </p>
  );
}
