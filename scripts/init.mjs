import { Settings } from './_settings.mjs'
import './_EtuneSharedCompendium.mjs'


Hooks.once("init", Settings.initialize);