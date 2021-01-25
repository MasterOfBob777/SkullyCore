// Generated by dts-bundle-generator v5.6.0

/// <reference types="cookieclicker" />

import Cppkies from 'cppkies';
import { CommonValue } from 'cppkies/dist/helpers';

export declare type CrateLike = (Game.Upgrade | Game.HeavenlyUpgrade | Game.Achievement | AdvancedUpgrade | AdvancedHeavenlyUpgrade | AdvancedAchievement | any);
export interface ExcludeTypes {
	total?: boolean;
	debug?: boolean;
	prestige?: boolean;
	cookie?: boolean;
	other?: boolean;
	shadow?: boolean;
	all?: true;
}
export declare type TagConditional = (boolean | ((me: CrateLike) => boolean));
declare class TagCondition {
	/**
	 * The name of your tag
	 */
	name: string;
	/**
	 * The color of your tag. Ex. "#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000", etc.
	 */
	color: string;
	/**
	 * A function that should return a boolean on whether this tag should be added to a CrateLike.
	 * Should also check if the crate has noTags and respect that, unless you need to do that.
	 */
	tagFunction: TagConditional;
	/**
	 * A class that adds a tag to a CrateLike as the name suggests
	 * @param name The tag's name
	 * @param color The color of your tag
	 * @param tagFunction A function that should return a boolean on whether this tag should be added to a CrateLike
	 */
	constructor(name: string, color: string, tagFunction: TagConditional);
}
declare class AdvancedAchievement extends Cppkies.Achievement {
	/**
	 * The pool that this achievement is in
	 */
	pool: any;
	/**
	 * A function which returns the description of the achievement
	 */
	descFunc: () => string;
	/**
	 * A function which returns the icon of the achievement
	 */
	iconFunction: () => Game.Icon;
	/**
	 * The groups to exclude this achievement from
	 */
	exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	noTags: boolean;
	/**
	 * Can you use neuromancy with this achievement?
	 */
	noNeuromancy: boolean;
	/**
	 * Creates a achievement with a few utility features.
	 * @param name The name of the achievement
	 * @param desc The description of it
	 * @param icon The icon for it
	 */
	constructor(name: string, desc: string, icon: Game.Icon);
}
declare class AuthorAchievement extends AdvancedAchievement {
	/**
	 * Creates an Author Achievement
	 * @param name Your name / The author's name
	 * @param desc A short desciption of what you or the author did
	 * @param icon An icon that preferably describes yourself / the author
	 */
	constructor(name: string, desc: string, icon: Game.Icon);
}
declare class AdvancedUpgrade extends Cppkies.Upgrade {
	/**
	 * The pool that this upgrade is in
	 */
	pool: any;
	/**
	 * The groups to exclude this upgrade from
	 */
	exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	noTags: boolean;
	/**
	 * Can you use neuromancy with this achievement?
	 */
	noNeuromancy: boolean;
	/**
	 * Creates a AdvancedUpgrade
	 * @param name The name of your upgrade
	 * @param desc Your upgrade's description
	 * @param price The price of your upgrade
	 * @param icon Your upgrade's icon
	 * @param buyFunc A function that gets called when your upgrade is bought
	 */
	constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, buyFunc?: () => void);
}
declare class AdvancedHeavenlyUpgrade extends Cppkies.HeavenlyUpgrade {
	/**
	 * The pool that this heavenly upgrade is in
	 */
	pool: any;
	/**
	 * The groups to exclude this heavenly upgrade from
	 */
	exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	noTags: boolean;
	/**
	 * Can you use neuromancy with this upgrade?
	 */
	noNeuromancy: boolean;
	/**
	 * Creates a AdvancedHeavenlyUpgrade.
	 * @param name The name of the heavenly upgrade
	 * @param desc The heavenly upgrade's description
	 * @param price The price of the heavenly upgrade
	 * @param icon The icon of your heavenly upgrade
	 * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	 * @param parents Your heavenly upgrade's parents
	 * @param buyFunc A function that gets called when buying your heavenly upgrade
	 */
	constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, position: [
		number,
		number
	], parents?: (string | number)[], buyFunc?: () => void);
}
export interface AdvancedBuffInterface extends Game.Buff {
	timeless?: boolean;
	dismissable?: boolean;
}
declare class AdvancedBuff extends Game.buffType {
	timeless: boolean;
	dismissable: boolean;
	constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface);
}
declare class PagedHeavenlyUpgrade extends AdvancedHeavenlyUpgrade {
	/**
	 * Creates a PagedHeavenlyUpgrade.
	 * @param name The name of the heavenly upgrade
	 * @param desc The heavenly upgrade's description
	 * @param price The price of the heavenly upgrade
	 * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	 * @param page The page's id that denotes when your heavenly upgrade will be visable
	 * @param icon The icon of your heavenly upgrade
	 * @param parents Your heavenly upgrade's parents
	 * @param buyFunc A function that gets called when buying your heavenly upgrade
	 */
	constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, position: [
		number,
		number
	], page: string, icon: CommonValue<Game.Icon>, parents?: (string | number)[], buyFunc?: () => void);
}
declare class RiftUpgrade extends PagedHeavenlyUpgrade {
	/**
	 * The page that this rift is from's id
	 */
	back: string;
	/**
	 * The page that this rift goes to's id
	 */
	goto: string;
	/**
	 * Don't change this. This is for checking if the rift is a rift when going through tags.
	 */
	isRift: boolean;
	/**
	 * Creates a RiftUpgrade.
	 * @param name The name of the heavenly upgrade
	 * @param desc The heavenly upgrade's description
	 * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	 * @param goto
	 * @param back
	 * @param icon The icon of your heavenly upgrade
	 * @param parents Your heavenly upgrade's parents
	 * @param buyFunc A function that gets called when buying your heavenly upgrade
	 */
	constructor(name: string, desc: CommonValue<string>, position: [
		number,
		number
	], goto: string, back: string, icon?: CommonValue<Game.Icon>, parents?: (string | number)[], buyFunc?: () => void);
	activateFunction: () => void;
}
declare class PrestigePage {
	/**
	 * The page's name in a sentence
	 */
	name: string;
	/**
	 * The internal id of the page
	 */
	id: string;
	/**
	 * The rift to take you from the vanilla page to this page.
	 */
	Rift: RiftUpgrade;
	/**
	 * The rift to take you from the this page to vanilla page.
	 */
	VanillaRift: RiftUpgrade;
	/**
	 * Creates a PrestigePage
	 * @param name The page's name in a sentence
	 * @param id The internal id of the page
	 * @param parents Your Goto Rift's parents (vanilla page)
	 * @param gotoicon Your Goto Rift's icon
	 * @param backicon Your Back Rift's icon
	 */
	constructor(name: string, id: string, parents: (string | number)[], gotoicon?: Game.Icon, backicon?: Game.Icon);
}
declare class TopBarMenuWidget {
	/**
	 * The widget's id
	 */
	id: string;
	/**
	 * The widgets icon
	 */
	icon: Game.Icon;
	/**
	 * The
	 */
	tooltip: () => string;
	onclick?: () => void;
	constructor(id: string, icon: Game.Icon, tooltip?: () => string);
	getDiv(): HTMLElement;
}
declare class BuildingBarMenuWidget {
	id: string;
	icon: Game.Icon;
	building: string;
	tooltip: () => string;
	onclick?: () => void;
	constructor(id: string, icon: Game.Icon, building: string, tooltip?: () => string);
	getDiv(): HTMLElement;
}
export declare type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget);
declare class Task extends AdvancedBuff {
	check: () => boolean;
	finish: () => boolean;
	constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface, check: () => boolean, finish: () => boolean);
}
declare function exclude(type: ("total" | "debug" | "prestige" | "cookie" | "other" | "shadow"), me: any): boolean;
declare let SkullyCore: {
	AdvancedAchievement: typeof AdvancedAchievement;
	AdvancedHeavenlyUpgrade: typeof AdvancedHeavenlyUpgrade;
	AdvancedUpgrade: typeof AdvancedUpgrade;
	AuthorAchievement: typeof AuthorAchievement;
	TagCondition: typeof TagCondition;
	TagConditions: [
		string,
		string,
		TagConditional
	][];
	PrestigePage: typeof PrestigePage;
	RiftUpgrade: typeof RiftUpgrade;
	PagedHeavenlyUpgrade: typeof PagedHeavenlyUpgrade;
	currentPage: string;
	pages: {
		[pageid: string]: Game.HeavenlyUpgrade[];
	};
	TopBarMenuWidget: typeof TopBarMenuWidget;
	BuildingBarMenuWidget: typeof BuildingBarMenuWidget;
	BarWidgets: {
		TopBar: {
			currentPos: number;
			Bars: TopBarMenuWidget[];
		};
		BuildingBar: {
			currentPos: Record<string, number>;
			Bars: Record<string, BuildingBarMenuWidget[]>;
		};
	};
	Task: typeof Task;
	ActiveTasks: Task[];
	onLoad: (() => void)[];
	exclude: typeof exclude;
};
export default SkullyCore;

export {};
