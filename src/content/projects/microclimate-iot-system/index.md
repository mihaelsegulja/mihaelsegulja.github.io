---
order: 0
name: "Microclimate IoT System"
description: "An IoT system for monitoring indoor temperature, humidity, pressure, CO₂, and air quality in real time."
tech: ["C++", "ESP32", "ASP.NET Core", "Angular", "SQL Server", "RabbitMQ", "MQTT", "SignalR"]
type: "College Final Project"
links: [{"label":"source code","url":"https://github.com/mihaelsegulja/microclimate-iot-system"}]
media: ["/src/media/microclimate/microclimate00.png","/src/media/microclimate/microclimate01.png","/src/media/microclimate/microclimate02.png","/src/media/microclimate/microclimate03.png","/src/media/microclimate/microclimate04.png","/src/media/microclimate/microclimate05.png","/src/media/microclimate/microclimate06.png","/src/media/microclimate/microclimate07.png","/src/media/microclimate/microclimate08.png","/src/media/microclimate/microclimate09.png","/src/media/microclimate/microclimate10.png","/src/media/microclimate/microclimate11.png"]
---

An ESP32 collects indoor temperature, humidity, pressure, CO<sub>2</sub>, and air quality readings and sends them through MQTT and RabbitMQ. The flexible message format makes measurements easy to add or remove, while two-way communication separates device telemetry from commands sent back to devices. A .NET 8 backend stores the telemetry in SQL Server and streams live updates with SignalR. The Angular dashboard provides live and historical charts, room and device management, and configurable alert rules.
