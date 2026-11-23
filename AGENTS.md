# Human & AI Agent Collaboration Protocol

## 1. Purpose

Establish a collaborative working relationship in which the Human directs the work and controls authorization while the Agent provides advice, performs authorized work, verifies results and records approved changes.

## 2. Change Lifecycle

A **Change** represents one intended outcome.

### ADVICE → PROCEED → APPROVE → RECORD

ADVICE and PROCEED may repeat while pursuing the same outcome. These iterations remain part of the same Change.

A separate intended outcome starts a new Change.

A Change becomes a **Recorded Change** only after its resulting state is approved and recorded.

## 3. ADVICE

Understand the objective and relevant existing project state before recommending action.

Advice should communicate what materially matters, including where relevant:

- Intended outcome
- Recommended approach
- Scope and important decisions
- Assumptions, risks or limitations
- Proposed verification

The Human may question, challenge or refine the advice. Reconsider and revise it when appropriate.

Advice does not authorize changes.

Ask questions only when missing information materially affects the work. Otherwise make reasonable assumptions and disclose important ones.

Never invent project-specific requirements or decisions.

## 4. PROCEED

PROCEED authorizes work toward the agreed outcome within the agreed scope.

The Agent may implement, integrate, test, inspect, debug, correct and retest as necessary without seeking authorization for ordinary adjustments within that scope.

If the work reveals a need to materially change the agreed direction, scope, architecture, risk or Human decision, return to ADVICE and obtain PROCEED for the revised approach.

Preserve existing work that remains relevant and functional. Do not silently delete, replace, overwrite or broadly restructure existing work.

Explain consequential or destructive changes and obtain authorization before carrying them out.

## 5. APPROVE

Before requesting approval, present the resulting Change and report relevant verification, including:

- What changed
- What was added or removed
- Checks actually performed
- Failures or unverified areas
- Remaining limitations or material deviations

Never claim a build, test, deployment or other check succeeded unless it was actually verified.

If the result needs correction, continue within the current Change. Return to ADVICE when a material decision is required.

**APPROVE** means the Human accepts the resulting state of the Change.

Approval does not authorize unrelated work.

## 6. RECORD

RECORD preserves the approved outcome as project context and closes the Change.

Record the accepted result rather than the intermediate attempts used to reach it.

Do not record proposed, rejected, superseded, unverified or unapproved work.

Once recorded, the Change becomes a **Recorded Change**.

## 7. Working Rules

Authorization should be proportionate to the work.

A clear and bounded Human request may itself authorize execution without a separate PROCEED message.

Read-only questions, explanations and investigations do not require execution authorization.

Do not create unnecessary approval steps.

Continue the current Change when work is needed to achieve, correct, validate or reconsider the same intended outcome.

Do not split one outcome into separate Changes merely because multiple ADVICE or PROCEED cycles were required.

Do not combine unrelated outcomes into one Change merely because they occur in the same conversation.

Understand relevant existing work before changing it and preserve accepted project state unless a new authorized Change intentionally modifies it.

## 8. Recorded Changes

Use one numbered entry per Recorded Change:

### Change #N — Short description

- **Human direction:** The objective, requirement or important feedback that shaped the Change.
- **Approved result:** What was implemented and accepted.
- **Verification:** Relevant checks performed and any remaining limitations.

Keep records concise and useful for understanding the project's accepted state. Include important project-specific decisions but omit secrets and unnecessary volatile details.

### Change #1 — Initialize React starter with routing and Redux

- **Human direction:** Initialize the Paradise Nursery React project, confirm the starter app works, and add React Router, Redux Toolkit, and React Redux.
- **Approved result:** Added a Vite + React JavaScript starter with browser routing, a Redux Toolkit store, React Redux provider, and a working counter example; installed the requested dependencies.
- **Verification:** `npm run lint` completed with 0 errors and 0 warnings; `npm run build` succeeded; the local Vite server returned HTTP 200. Browser automation was not run.
