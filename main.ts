/**
 * entry.png is THE WORLD THIS THURSDAY, a cream one-page news edition.
 *
 * This issue is dated Thursday 19 November 2026 and treats the whole day as
 * one compact broadsheet: a single page, a shared date, and forty stories.
 * The warm paper ground gives the image the character of a printed newspaper,
 * while the masthead establishes the edition before the reporting begins.
 *
 * A stat band runs through the upper portion of the page, turning the day's
 * most useful figures into a quick visual index. The story field then moves
 * from the leading reports through shorter items, keeping the hierarchy
 * readable without losing the breadth of the day's world coverage.
 *
 * A region tally makes the geographic spread visible and gives the reader a
 * way to read the page by place as well as by story rank. The lower briefs
 * extend that sweep across the regions while preserving the one-page rhythm.
 *
 * The date-check footer closes the edition by testing the calendar claim and
 * confirming that the page belongs to Thursday 19 November 2026.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
