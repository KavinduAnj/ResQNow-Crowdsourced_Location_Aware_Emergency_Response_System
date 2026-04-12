import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SEVERITY_COLORS = {
  CRITICAL: "#D62828",
  HIGH: "#E53935",
  MEDIUM: "#FFA000",
  LOW: "#43A047",
};

export default function DangerZoneCard({ zone, onPress }) {
  const sevColor = SEVERITY_COLORS[zone.severity] || "#D62828";

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-4 shadow-sm border"
      style={{ borderColor: "#D62828", borderWidth: 1.5 }}
    >
      {/* Header */}
      <View className="flex-row items-start justify-between mb-2">
        <View className="flex-row items-center gap-2 flex-1 pr-2">
          <Ionicons name="warning" size={20} color="#D62828" />

          <Text
            className="text-[16px] font-bold text-slate-800 flex-1"
            numberOfLines={1}
          >
            {zone.name}
          </Text>
        </View>

        {zone.status && (
          <View
            className="px-2 py-1 rounded-full"
            style={{ backgroundColor: sevColor }}
          >
            <Text className="text-white text-[10px] font-semibold">
              {zone.status}
            </Text>
          </View>
        )}
      </View>

      {/* Severity */}
      <View
        className="self-start px-2 py-1 rounded-lg mb-2"
        style={{ backgroundColor: sevColor }}
      >
        <Text className="text-white text-[10px] font-bold">
          {zone.severity} RISK
        </Text>
      </View>

      {/* Description */}
      <Text
        className="text-[13px] text-slate-600 leading-5 mb-3"
        numberOfLines={2}
      >
        {zone.description}
      </Text>

      {/* Info Row */}
      <View className="flex-row gap-4 mb-1">
        <View className="flex-row items-center gap-1">
          <Ionicons name="location-outline" size={14} color="#D62828" />
          <Text className="text-[12px] text-slate-500">
            {zone.radius} radius
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <Ionicons name="time-outline" size={14} color="#D62828" />
          <Text className="text-[12px] text-slate-500">{zone.date}</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-1">
        <Ionicons name="people-outline" size={14} color="#D62828" />
        <Text className="text-[12px] text-slate-500">
          {zone.affected} affected
        </Text>
      </View>

      {/* Action */}
      <View className="mt-3 flex-row items-center gap-1">
        <Text className="text-[13px] font-semibold text-[black]">
           View Safety Instructions
        </Text>

      <Ionicons
        name="arrow-forward"
        size={16}
        color="black"
      />
</View>
    </TouchableOpacity>
  );
}