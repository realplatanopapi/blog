"use client";

import { linkRecipe } from "@/theme/recipes/link";
import { chakra } from "@chakra-ui/react";
import Link from "next/link";

export const TextLink = chakra(Link, linkRecipe);
