


export interface IdndDetailResponse {
    index: string
    name: string
    size: string
    type: string
    alignment: string
    armor_class: ArmorClass[]
    hit_points: number
    hit_dice: string
    hit_points_roll: string
    speed: Speed
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    proficiencies: Proficiency[]
    damage_vulnerabilities: any[]
    damage_resistances: any[]
    damage_immunities: string[]
    condition_immunities: any[]
    senses: Senses
    languages: string
    challenge_rating: number
    proficiency_bonus: number
    xp: number
    special_abilities: SpecialAbility[]
    actions: Action[]
    legendary_actions: LegendaryAction[]
    image?: string
    url: string
}

export interface ArmorClass {
    type: string
    value: number
}

export interface Speed {
    walk: string
    fly: string
    swim: string
}

export interface Proficiency {
    value: number
    proficiency: Proficiency2
}

export interface Proficiency2 {
    index: string
    name: string
    url: string
}

export interface Senses {
    blindsight: string
    darkvision: string
    passive_perception: number
}

export interface SpecialAbility {
    name: string
    desc: string
    usage?: Usage
}

export interface Usage {
    type: string
    times: number
    rest_types: any[]
}

export interface Action {
    name: string
    multiattack_type?: string
    desc: string
    actions: Action2[]
    attack_bonus?: number
    damage?: Damage[]
    dc?: Dc
    usage?: Usage2
}

export interface Action2 {
    action_name: string
    count: number
    type: string
}

export interface Damage {
    damage_type: DamageType
    damage_dice: string
}

export interface DamageType {
    index: string
    name: string
    url: string
}

export interface Dc {
    dc_type: DcType
    dc_value: number
    success_type: string
}

export interface DcType {
    index: string
    name: string
    url: string
}

export interface Usage2 {
    type: string
    dice: string
    min_value: number
}

export interface LegendaryAction {
    name: string
    desc: string
    dc?: Dc2
    damage?: Damage2[]
}

export interface Dc2 {
    dc_type: DcType2
    dc_value: number
    success_type: string
}

export interface DcType2 {
    index: string
    name: string
    url: string
}

export interface Damage2 {
    damage_type: DamageType2
    damage_dice: string
}

export interface DamageType2 {
    index: string
    name: string
    url: string
}