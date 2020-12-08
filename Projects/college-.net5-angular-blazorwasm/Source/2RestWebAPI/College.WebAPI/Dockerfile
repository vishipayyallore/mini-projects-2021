#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Source/2RestWebAPI/College.WebAPI/College.WebAPI.csproj", "Source/2RestWebAPI/College.WebAPI/"]
RUN dotnet restore "Source/2RestWebAPI/College.WebAPI/College.WebAPI.csproj"
COPY . .
WORKDIR "/src/Source/2RestWebAPI/College.WebAPI"
RUN dotnet build "College.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "College.WebAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "College.WebAPI.dll"]