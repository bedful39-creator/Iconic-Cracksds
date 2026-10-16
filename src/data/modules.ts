export type ModuleStatus = "undetected" | "risk" | "detected";

export type ModuleCategory =
  | "Combat"
  | "Misc"
  | "Donut"
  | "BaseFinding"
  | "Render"
  | "Client";

export interface Module {
  name: string;
  category: ModuleCategory;
  status: ModuleStatus;
  description: string;
}

/**
 * The single dataset behind the /features page. Every count on that page —
 * the stat chips, the per-category totals, the "Showing N of N" footer —
 * derives from this array rather than being hardcoded.
 */
export const modules: Module[] = [
  // ── Combat (21) ────────────────────────────────────────────────
  { name: "Aim Assist", category: "Combat", status: "undetected", description: "Smooths your cursor onto the nearest valid target with configurable smoothing, FOV and hitbox bias." },
  { name: "Anchor Macro", category: "Combat", status: "undetected", description: "Places anchors and glowstone around a hole in a single keybind." },
  { name: "Auto Crystal", category: "Combat", status: "undetected", description: "The full crystal PvP loop — place, break, reposition and re-place on cooldown." },
  { name: "Auto Double Hand", category: "Combat", status: "undetected", description: "Swaps and uses your offhand item from one input instead of two." },
  { name: "Auto Hit Crystal", category: "Combat", status: "undetected", description: "Lands the final crystal damage inside the tightest timing window." },
  { name: "Auto Inv Totem", category: "Combat", status: "risk", description: "Moves a totem into the offhand right before incoming damage resolves." },
  { name: "Auto Jump Reset", category: "Combat", status: "undetected", description: "Resets sprint-jump timing to squeeze out extra distance per gap." },
  { name: "Auto Totem", category: "Combat", status: "risk", description: "Swaps to a totem the instant the offhand slot empties." },
  { name: "Crystal Optimizer", category: "Combat", status: "undetected", description: "Removes pointless crystal placements to keep server response times low." },
  { name: "Double Anchor", category: "Combat", status: "undetected", description: "Chains two anchor placements back to back for instant block speed." },
  { name: "Elytra Swap", category: "Combat", status: "undetected", description: "Swaps to an elytra mid-air at the exact apex of your boost." },
  { name: "HitBox", category: "Combat", status: "detected", description: "Expands your server-side hitbox to make reach easier on some server builds." },
  { name: "Hover Totem", category: "Combat", status: "undetected", description: "Parks the cursor over the offhand slot so it stays primed at all times." },
  { name: "Mace Bomber", category: "Combat", status: "undetected", description: "Times mace swings into a downward attack for the bonus damage tier." },
  { name: "Mace Swap", category: "Combat", status: "undetected", description: "Reorders your hotbar so the mace always sits in the hit slot." },
  { name: "No Hit Delay", category: "Combat", status: "undetected", description: "Trims the cooldown gap between consecutive melee swings." },
  { name: "Shield Breaker", category: "Combat", status: "undetected", description: "Axes through an opponent's shield and disables it mid-fight." },
  { name: "Spear Swap", category: "Combat", status: "undetected", description: "Hotbar reordering built specifically around the spear reach window." },
  { name: "Static HitBoxes", category: "Combat", status: "risk", description: "Renders fixed hitboxes that some players can visually line up on." },
  { name: "Totem Offhand", category: "Combat", status: "undetected", description: "Keeps a totem permanently reserved in the offhand slot." },
  { name: "Trigger Bot", category: "Combat", status: "undetected", description: "Fires on a configurable delay once your cursor settles on target." },

  // ── Misc (21) ──────────────────────────────────────────────────
  { name: "Auto Clicker", category: "Misc", status: "undetected", description: "Repeats left-click at an adjustable rate with human-like jitter." },
  { name: "Auto Eat", category: "Misc", status: "undetected", description: "Eats the selected food whenever hunger drops below your threshold." },
  { name: "Auto Firework", category: "Misc", status: "undetected", description: "Detonates the rocket at the exact moment an elytra boost peaks." },
  { name: "Auto Log", category: "Misc", status: "undetected", description: "Walks you out of the server the instant a detection warning fires." },
  { name: "Auto Loot", category: "Misc", status: "undetected", description: "Loots nearby chests and containers and stows the contents." },
  { name: "Auto Mine", category: "Misc", status: "undetected", description: "Mines the block you are looking at with correct per-tool timing." },
  { name: "Auto Reconnect", category: "Misc", status: "undetected", description: "Rejoins your last server the moment a kick or disconnect lands." },
  { name: "Auto Tool", category: "Misc", status: "undetected", description: "Swaps to the correct tool the instant you look at a block." },
  { name: "Auto TPA", category: "Misc", status: "undetected", description: "Sends, accepts and queues teleport requests on a schedule you set." },
  { name: "Auto Walk", category: "Misc", status: "undetected", description: "Moves at sprint speed without holding the sprint key down." },
  { name: "Cord Snapper", category: "Misc", status: "undetected", description: "Slaps a fishing rod to snag players who are not expecting it." },
  { name: "Elytra Glide", category: "Misc", status: "undetected", description: "Extends glide time and smooths elytra control input." },
  { name: "Fakeplayer", category: "Misc", status: "undetected", description: "Spawns a controllable proxy for building and AFK setups." },
  { name: "Fast Place", category: "Misc", status: "undetected", description: "Places blocks at the client's maximum tick rate." },
  { name: "Freecam", category: "Misc", status: "undetected", description: "Detaches the camera and flies it freely without moving your player." },
  { name: "Key Pearl", category: "Misc", status: "undetected", description: "Marks ender pearls with a live distance readout while held." },
  { name: "Key Wind Charge", category: "Misc", status: "undetected", description: "Traces wind charge trajectories so you can plan jumps before committing." },
  { name: "Name Protect", category: "Misc", status: "undetected", description: "Replaces nearby player names with a fixed alias of your choosing." },
  { name: "Skin Protect", category: "Misc", status: "undetected", description: "Conceals your own skin and cape from nameplate renderers." },
  { name: "Sprint", category: "Misc", status: "undetected", description: "Holds sprint automatically whenever there is room to run." },
  { name: "Weather Notifier", category: "Misc", status: "undetected", description: "Alerts you when rain or a thunderstorm changes the ruleset." },

  // ── Donut (10) ─────────────────────────────────────────────────
  { name: "Anti Trap", category: "Donut", status: "undetected", description: "Cancels server traps before they resolve on your position." },
  { name: "Auto Sell", category: "Donut", status: "undetected", description: "Deposits and sells the contents of your ender chest." },
  { name: "Auto Spawner Sell", category: "Donut", status: "undetected", description: "Breaks spawner drops and sells them in a single pass." },
  { name: "Chunk Finder", category: "Donut", status: "undetected", description: "Scans loaded chunks for valuables as you fly over them." },
  { name: "Fake Pay", category: "Donut", status: "undetected", description: "Spams payment confirmations to trigger shop restock windows." },
  { name: "Fake Stats", category: "Donut", status: "undetected", description: "Broadcasts a stat payload the server accepts as a legitimate gain." },
  { name: "Item Dropper", category: "Donut", status: "undetected", description: "Drops hotbar stacks on a configurable timer." },
  { name: "Netherite Finder", category: "Donut", status: "undetected", description: "Highlights netherite and ancient debris straight through terrain." },
  { name: "Player Chunks", category: "Donut", status: "undetected", description: "Overlays the exact chunks other players currently occupy." },
  { name: "Spawner Protect", category: "Donut", status: "undetected", description: "Stops mob griefing inside your spawner rooms automatically." },

  // ── BaseFinding (9) ────────────────────────────────────────────
  { name: "Block Entity Debug", category: "BaseFinding", status: "undetected", description: "Surfaces block entities the vanilla client never renders." },
  { name: "Hole ESP", category: "BaseFinding", status: "undetected", description: "Marks lava, crevice and escape holes across the terrain." },
  { name: "Light Finder", category: "BaseFinding", status: "undetected", description: "Finds the lowest light level in an area to read mob spawn patterns." },
  { name: "Prime Chunk Finder", category: "BaseFinding", status: "undetected", description: "Detects base-layout prime chunks while you fly." },
  { name: "RTP Base Finder", category: "BaseFinding", status: "risk", description: "Filters random-teleport landing zones for base tells." },
  { name: "Sus Chunk Finder", category: "BaseFinding", status: "undetected", description: "Flags chunks that match known base-finder signatures." },
  { name: "Suspicious ESP", category: "BaseFinding", status: "undetected", description: "Highlights player-placed blocks far from natural generation." },
  { name: "Tunnel Base Finder", category: "BaseFinding", status: "detected", description: "Reads tunnel metadata the server sends but never displays." },
  { name: "Seed Chunk Finder", category: "BaseFinding", status: "undetected", description: "Predicts world-seed base locations and marks them on the map." },

  // ── Render (16) ────────────────────────────────────────────────
  { name: "Block ESP", category: "Render", status: "undetected", description: "Outlines selected blocks through terrain at any distance." },
  { name: "Block Notifier", category: "Render", status: "undetected", description: "Notifies you the instant a configured block appears on screen." },
  { name: "Free Look", category: "Render", status: "undetected", description: "Look freely around without turning your player model." },
  { name: "Fullbright", category: "Render", status: "undetected", description: "Lifts the world to a uniform brightness with zero bloom." },
  { name: "HUD", category: "Render", status: "undetected", description: "Custom in-game overlay with your own module, FPS and session layout." },
  { name: "Jump Circles", category: "Render", status: "undetected", description: "Projects your jump arc as a landing circle on the ground." },
  { name: "Mob ESP", category: "Render", status: "undetected", description: "Draws mob boxes through walls with live distance and health." },
  { name: "Name Tags", category: "Render", status: "undetected", description: "Renders clean nameplates with health, armor and gear above players." },
  { name: "Ore Sim", category: "Render", status: "undetected", description: "Simulates ore placement so you can preview future spawns." },
  { name: "Pearl Trajectory", category: "Render", status: "undetected", description: "Draws the complete arc an ender pearl will take from your hand." },
  { name: "Player ESP", category: "Render", status: "undetected", description: "Player boxes and tracers that keep working through terrain." },
  { name: "RealHitBox", category: "Render", status: "undetected", description: "Renders the true server hitbox instead of the visual player model." },
  { name: "Music HUD", category: "Render", status: "undetected", description: "Now-playing overlay positioned out of the way of gameplay." },
  { name: "Storage ESP", category: "Render", status: "undetected", description: "Highlights chests, ender chests and shulkers within range." },
  { name: "SwingSpeed", category: "Render", status: "undetected", description: "Visual feedback for exactly where you are in your attack cooldown." },
  { name: "Target HUD", category: "Render", status: "undetected", description: "A dedicated target panel showing health, armor and held gear." },

  // ── Client (5) ─────────────────────────────────────────────────
  { name: "Chat Macro", category: "Client", status: "undetected", description: "Expandable text macros bound to keys for chat and commands." },
  { name: "Discord Presence", category: "Client", status: "undetected", description: "Publishes your in-game state straight to your Discord profile." },
  { name: "Friends", category: "Client", status: "undetected", description: "A friend list with last-seen timestamps and online status." },
  { name: "Proxy", category: "Client", status: "undetected", description: "SOCKS5 proxy support for routing your connection." },
  { name: "Radio", category: "Client", status: "undetected", description: "An in-client music player with a built-in track library." },
];

export const categories: ModuleCategory[] = [
  "Combat",
  "Misc",
  "Donut",
  "BaseFinding",
  "Render",
  "Client",
];

export const statusMeta: Record<
  ModuleStatus,
  { label: string; dot: string; text: string; chip: string }
> = {
  undetected: {
    label: "Undetected",
    dot: "bg-good",
    text: "text-good",
    chip: "border-good/25 bg-good/10 text-good",
  },
  risk: {
    label: "Use at Risk",
    dot: "bg-warn",
    text: "text-warn",
    chip: "border-warn/25 bg-warn/10 text-warn",
  },
  detected: {
    label: "Detected",
    dot: "bg-danger",
    text: "text-danger",
    chip: "border-danger/25 bg-danger/10 text-danger",
  },
};
