/**
 * entry.png - One Day in World News, Thursday 19 November 2026.
 *
 * The artifact this repository ships is entry.png, a 1024x1024 broadsheet
 * drawn in the manner of cream newsprint and holding the entire day's world
 * news on one page. Across the top sits the masthead, anchored by a red date
 * tab reading Thursday 19 November 2026. Directly beneath it runs the
 * day-in-numbers strip, eight cells of headline figures: the ICJ's 9-6 vote
 * finding genocide, Anthropic pricing its IPO at $81bn, the M5.7 earthquake
 * that struck Kumamoto, and UK inflation printing at 3.6%.
 *
 * Below the strip the page descends through three tiers of cards. The three
 * hero cards carry the leading stories - the Shenzhen three-way summit, the
 * ICJ's Myanmar ruling, and Anthropic's Nasdaq debut. Five secondary cards
 * and seven tertiary cards follow with the rest of the day's significant
 * reporting. Further down, twenty-four region-tagged evening briefs sweep
 * every continent in short paragraphs. A date-check footer closes the page,
 * filtering out anything dated outside Thursday 19 November 2026.
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
