"use client";

import { interestGroups } from "@/config/inquiry";
import styles from "./InterestSelect.module.css";

type InterestSelectProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

/**
 * Accessible selection cards for the primary area of interest. Rendered as a
 * native radio group so keyboard navigation, screen-reader semantics, and form
 * validation all work without custom key handling.
 */
export default function InterestSelect({ value, onChange, error }: InterestSelectProps) {
  return (
    <fieldset
      className={styles.fieldset}
      aria-describedby={error ? "interest-error" : undefined}
    >
      <legend className="visually-hidden">Primary area of interest</legend>

      {error && (
        <p id="interest-error" className="field-error" role="alert">
          {error}
        </p>
      )}

      <div className={styles.groups}>
        {interestGroups.map((group) => (
          <div key={group.heading} className={styles.group}>
            <p className={styles.groupHeading}>{group.heading}</p>
            <div className={styles.options}>
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className={styles.option}
                  data-selected={value === option.value ? "true" : undefined}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    className={styles.input}
                  />
                  <span className={styles.marker} aria-hidden="true" />
                  <span className={styles.label}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
